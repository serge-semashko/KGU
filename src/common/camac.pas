unit camac;

interface
uses windows,classes,sysutils,forms,dialogs;
const
 ct0607        = 1;
 ctKK011       = 2;
 pmCamac       = 1;
 pmNoCamac     = 2;
 fnRead        = 0;
 fnReadreset   = 2;
 fnWrite       = 16;
 fnReset       = 9;
 fnCheckLam    = 8;
 fnResetLam    = 10;
 fnDisableLam  = 24;
 fnEnableLam   = 26;
type
  TByteArray    = array[0..255] of Byte;
  TWordArray    = array[0..20] of word;
  pByteArray    = ^TByteArray;
  pWordArray    = ^TWordArray;
TCamac32 = class(tobject)
  private
  r           :integer;
  Count       :Integer;
  fnRead      :word;
  fnReadReset :word;
  fnWrite     :word;
  Public
  Station     :word;
  Subaddr     :word;
   Kind           :Integer;
   Crate          :integer;
   Function  Ready:Boolean;
   Function  Read:word;
   Function  ReadADC:word;
   Function  CheckX:Boolean;
   Function  CheckQ:Boolean;
   Function  CheckL:Boolean;
   Function  Read24:dword;
   Procedure Write(data:word);
   Function  CheckLam:boolean;
   Procedure ResetLAM;
   Procedure EnableLAM;
   Procedure Reset;
   Procedure Write24(data:dword);
   Function  DefCMD ( N,  A:integer):Integer;
   Procedure NAFW16 ( N, A, F, D:word);
   Function  NAFR16 ( N, A, F:word ):word;
   Procedure NAFSet ( N, A, F:word);
   Procedure ReadXQL;
   Procedure Init(iStation,iCrate: word);
   Procedure SetCrate   (Index :Integer );
   Procedure SetChannel (Index :Integer );virtual;abstract;
   Function  GetChannel (Index :Integer ):double;virtual;abstract;
   Procedure NAFW24 ( N, A, F, D:Integer);
   Function  NAFR24 ( N, A, F:word):integer;
   Property  PutWord :word write Write;
   Property  Put24   :dword write Write24;
   Property  X       :boolean read CheckX;
   Property  Q       :boolean read CheckQ;
   Property  L       :boolean read CheckL;
end;
TKB002 = class (tCamac32)
   Function  ReadSubaddr(Index:Integer):word;
   Procedure WriteSubaddr(Index:Integer;value:word);
   Property  SubaddrVal[Index:integer]:word read ReadSubAddr write WriteSubAddr;default;
end;
TADC16_2 = class (TCamac32)
   Function getChannel(Index:integer):double;override;
   Property channels[Index:integer]:double read GetChannel;default;
end;

TADC12_32 = class (TCamac32)
   Function getChannel(Index:integer):Double;OverRide;
   Function getXChannel(Index:integer):string;
   Property channels[Index:integer]:Double read getChannel;default;
end;

TDAC10_8 = class(TCamac32)
   Procedure SetValue(index:Integer;value:Double);
   Property channels[index:integer]:Double write setvalue;default;
end;
TDAC16_2 = class(TCamac32)
   Procedure SetValue(index:Integer;value:Double);
   Property channels[index:integer]:Double write setvalue;default;
end;
TUIB = class (tcamac32)
   Function getChannel(index:integer):double;OverRide;
   Function getADCX(index:integer):string;
   Function GetDigital(Index:Integer):Integer;
   Property ADC[index:Integer]:Double read getChannel;
   Property D[Index:Integer]:Integer read GetDigital;
end;
TKP = class ( TCamac32 )
   LastValue  : word;
   LastValue1 : word;
   function GetValue(Index:Integer):Integer;
   function GetCounter(Index:Integer):Double;
   function GetCounter_dec(Index:Integer):Double;
   function GetF(Index:Integer):Integer;
   property Channels[Index:Integer]:Integer read getValue;default;
   property Counter[index:integer]:Double read GetCounter;
   property Counter_dec[index:integer]:Double read GetCounter_dec;
   Property F[Index:integer]:integer read getF;

end;
Function Inport(port:word):word;
Procedure Outport(port,data:word);

var
  ProgramMode :Integer;
  cmc  :Tcamac32;
  HW32           : THANDLE;
  ActiveHW       : Boolean;
  LinearAddressf  :pByteArray;
  LinearWordf     :pWordArray;
  LinearAddresse  :pByteArray;
  LinearWorde     :pWordArray;
  Crates                   :array[0..10,1..25] of tcamac32;
  CamacMutex               :THandle;
implementation
var
  StTime         :double;
  Sleep0Time    :double;
  sleep0Length  :integer;
Procedure Delay(mks:dword);
var
 tmp:double;
begin
  tmp:=mks;
 while tmp>0 do
  begin
   Tmp:=Tmp-sleep0time;
   sleep(0);
  end;
end;
Procedure WaitCamac;
var
 i1:integer;
begin
// sleep(1);
 for i1:=0 to trunc(180/sleep0time)  do sleep(0);
end;
Function Inport(port:word):word;
var
 adr,data:word;
begin
 asm
   mov dx,port
   in ax,dx
   mov result,ax
 end;
end;
Procedure Outport(port,data:word);
var
 adr,indata:word;
begin
 asm
   mov ax,data;
   mov dx,port
   out dx,ax
 end;
end;
//*****************************************
 Function TCamac32.Ready;
Begin
  count := 0;
   r := 0;
  while ((r = 0) and  ( count <> 1000)) do
  Begin
    inc(count);
    r := inport($258) and $2000;
  end;
  if (r = 0 ) Then result:= TRUE
              else Result:= FALSE;
end;
//*****************************************
Function  TCamac32.DefCMD ( N,  A:integer):Integer;
var
  buffer:word;
Begin
  Buffer := (N shl 4) OR A OR $2000;
  if (Crate <> 0) then buffer:= ( Buffer OR $200);
  Result:=buffer;
end;
//*****************************************
Procedure TCamac32.ResetLAM;
var
  d   : word;
begin
 NAFR16(station,0,fnResetLAM);
end;
Procedure TCamac32.EnableLAM;
var
  d   : word;
begin
 NAFR16(station,0,fnEnableLAM);
end;
Procedure TCamac32.Reset;
begin
 NAFR16(station,0,fnReset);
end;
function TCamac32.CheckLam: boolean;
begin
 NAFR16(station,0,fnCheckLAM);
 result:=q;
end;

  Procedure TCamac32.NAFW16 ( N, A, F, D:word);
  Begin
    WaitCamac;
    case kind of
      ct0607:begin
	          outport($252, DefCMD(0, 0) and $EFFF);
	          outport($256, F);
	          outport($252, DefCMD(N, A) and $EFFF);
	          outport($256, D);
             end;
     ctkk011:begin
                  Case Crate of
                     0:begin
                        LinearWorde[0]:=A + N shl 4 + F shl 9;
                        WaitCamac;
                        LinearWorde[2]:=d;
                       end;
                     1:begin
                        LinearWordf[0]:=A + N shl 4 + F shl 9;
                        WaitCamac;
                        LinearWordf[2]:=d;
                       end;
                  end;
            end;
     end;
  end;
//*****************************************
  Function TCamac32.NAFR16 ( N, A, F:word ):word;
  Begin
     result:=$FFFF;
     WaitCamac;
     case kind of
      ct0607:begin
               outport($252, DefCMD(0, 0) and $EFFF);
               outport($256, F);
               outport($252, DefCMD(N, A) OR $1000);
               inport($256);
               result:=(inport ($254));
             end;
     ctkk011:begin
                  Case Crate of
                     0:begin
                        LinearWorde[0]:=A + N shl 4 + F shl 9;
                        WaitCamac;
                        Result:=LinearWorde[0];
                       end;
                     1:begin
                        LinearWordf[0]:=A + N shl 4 + F shl 9;
                        WaitCamac;
                        Result:=LinearWordf[0];
                       end;
                  end;
             end;
     end;

  end;
//*******************************************
 Procedure TCamac32.NAFSet ( N, A, F:word);
  Begin
	outport($252, DefCMD(0, 0) and $EFFF);
	outport($256, F);
	outport($252, DefCMD(N, A) and $EFFF);
	outport($256, 0);
  end;
//********************************************
Procedure TCamac32.ReadXQL;
var
  xql   :word;
  Begin
  {
	XQL := NAFR16 (0, 0, 0);
	X := ((XQL shr 14) and $1)=1;
	Q := 1=((XQL shr 15) and $1);
	L := 1=((inport($252) shr 14) and $1);
}
  end;
function TCamac32.CheckL: boolean;
var
  xql   :word;
  Begin
	XQL := NAFR16 (0, 2, 0);
	Result := 1=((inport($252) shr 14) and $1);
  end;

function TCamac32.CheckQ: boolean;
var
  xql   :word;
  Begin
	XQL := NAFR16 (0, 2, 0);
	Result := 1=((XQL shr 14) and $1);
  end;

function TCamac32.CheckX: boolean;
var
  xql   :word;
  Begin
	XQL := NAFR16 (0, 2, 0);
	Result := ((XQL shr 13) and $1)=1;
  end;

//*********************************************
Procedure TCamac32.SetCrate( Index:Integer );
  Begin
   Crate := Index;
  end;
//*********************************************
Procedure TCamac32.NAFW24 ( N, A, F, D:Integer);
  Begin
	outport($252, DefCMD(0, 2) and $EFFF);
	outport($256, (D shr 16));
	outport($252, DefCMD(0, 0) and $EFFF);
	outport($256, F);
	outport($252, DefCMD(N, A) and $EFFF);
	outport($256, D and $0000FFFF);
  end;
//*********************************************
Function TCamac32.NAFR24 ( N, A, F:word):integer;
var
 d1,d2:integer;
Begin
  Case Crate of
      0:begin
         WaitCamac;
         LinearWorde[0]:=A + N shl 4 + F shl 9;
         WaitCamac;
         d1:=LinearWorde[0];
         WaitCamac;
         LinearWorde[0]:=0;
         WaitCamac;
         d2:=LinearWorde[0];
        end;
      1:begin
         WaitCamac;
         LinearWordf[0]:=A + N shl 4 + F shl 9;
         WaitCamac;
         d1:=LinearWordf[0];
         WaitCamac;
         LinearWordf[0]:=0;
         WaitCamac;
         d2:=LinearWordf[0];
        end;
  end;
  result:=d1 or ( d2 shl 16);

{
	outport($252, DefCMD (0, 0) and $EFFF);
	outport($256, F);
	outport($252, DefCMD (N, A) OR $1000);
    //outport($256, 0);
	D1 := inport($256);
	outport($252, DefCMD (0, 2) OR $1000);
	//outport($256, 0);
        d2:=inport($256);
	result:=(d2 shl 16)  OR D1;
}
end;
//*********************************************
procedure TCamac32.Init;
begin
   Crate:=ICrate;
   kind:=ctkk011;
   Station:=iStation;
   fnRead:=0;
   fnReadreset:=2;
   fnWrite:=16;
   subaddr:=0;
end;

function TCamac32.Read: word;
begin
  Result:=NAFR16(Station,subaddr,fnread);
end;
function TCamac32.ReadADC: word;
begin
  Result:=NAFR16(Station,subaddr,1);
end;

function TCamac32.Read24: dword;
begin
  Result:=NAFR24(Station,subaddr,fnread);

end;

procedure TCamac32.Write(data: word);
begin
  NAFw16(Station,subaddr,fnWrite,Data);
end;

procedure TCamac32.Write24(data: dword);
begin
  NAFw24(Station,subaddr,fnWrite,Data);
end;

{ TADC16_2 }

function TADC16_2.getChannel(Index: integer): Double;
var
  stTime  :tdateTime;
  i1      :integer;
  mResult :Integer;
begin
 if not (index in [0,1]) then
 begin
   MessageBox(0,pchar('ADC16-2 . Index out of range :'+IntToStr(Index))
   ,'Error',mb_ok);
 end;
 sleep(1);
 Write(Index);
 sleep(1);
 Write(Index);
 sleep(100);
 stTime:=now;
 i1:=0;
 while (i1*sleep0Time)<100 do
 begin
   inc(i1);
   mResult:=read24;
   if (mResult and $10000) <> 0  then break;
   application.ProcessMessages;
 end;
 if (Mresult and $10000) = 0  then result:=-1
                              else begin
                                 mResult:=mResult and $FFFF;
                                 Result:=mResult*10.0/$FFFF;
                              end;
end;

{ TADC12_32 }

function TADC12_32.getChannel(Index: integer): Double;
var
  gr,chNum        :integer;
  ResultOk        :boolean;
  Sign            :Integer;
  mResult          :Integer;
  i1:integer;
  rval       :integer;
begin
  Subaddr:=0;
  if index>15 then gr:=1 else gr:=0;
  chnum:=index mod 16;
  begin
     ResultOK:=false;
     write(gr*16+chNum);
     i1:=0;
     while (i1*sleep0Time)<100 do
     begin
       inc(i1);
       mResult:=read24;
       if (mResult and $1000) <> 0  then ResultOK:=true;
       if resultOK then break;
       application.ProcessMessages;
     end;
     If ResultOK then
       begin
          rval:=mresult  and $7FF ;
          if (mresult and $800)<>0 then sign:=-1 else Sign:=1;
          mresult:=mResult and $07FF;
          if sign<0 then mResult:=$7FF xor rval;
          mResult:=mResult*Sign;
          Result:=mResult*10/$7FF;
       end else result:=-4000;
  end;
end;

function TADC12_32.getXChannel(Index: integer): string;
var
  gr,chNum        :integer;
  ResultOk        :boolean;
  Sign            :char;
  mResult         :integer;
  i1              :Integer;
  rval             :integer;
begin
  Subaddr:=0;
  if index>15 then gr:=1 else gr:=0;
  chnum:=index mod 16;
  begin
     ResultOK:=false;
     write(gr*16+chNum);
     i1:=0;
     while (i1*Sleep0Time)<100 do
     begin
       inc(i1);
       mResult:=read24;
       if (mResult and $1000) <> 0  then ResultOK:=true;
       if resultOK then break;
       application.ProcessMessages;
       sleep(0);
     end;
     If ResultOK then
       begin
          rval:=mresult  and $7FF ;
          if (mresult and $800)<>0 then begin
                                       rval:=$7FF xor rval;
                                       sign:='-'
                                    end else Sign:=' ';
          Result:=format('%.8X',[mResult]);
          result:=IntToStr(((mresult shr 17) and $1 ) )+' '+
                   format('%.2d',[(mresult shr 13) and $F]) +' '+sign+
                   format('%.4d',[rval] );
       end else result:='-XXXXXXXX';
  end;
end;

{ TDAC10_8 }

procedure TDAC10_8.SetValue;
var
 r1:double;
 rval:word;
begin
  subaddr:=index;
  r1:=(value/10.0)*$FFF;
  rval:=trunc(r1);
  write(rval);
  WaitCamac;
end;

{ TDAC16_2 }

procedure TDAC16_2.SetValue;
var
  rval:word;
begin
  WaitCamac;
  subaddr:=index;
  rval:=trunc(value*$FFFF/10.0);
  write(rval);
  WaitCamac;
end;

{ TUIB }

function TUIB.getChannel(index: integer): double;
var
  stTime  :tdateTime;
  i1      :integer;
  mResult :Integer;
begin
 if not (index in [0..11]) then
 begin
   MessageBox(0,pchar('UIB . Index out of range :'+IntToStr(Index))
   ,'Error',mb_ok);
 end;
 subaddr:=Index mod 6;
 Write(Index div 6);
 stTime:=now;
 i1:=0;
 while (i1*Sleep0Time)<50 do
 begin
   inc(i1);
   subaddr:=index mod 6;
   mResult:=read;
   if (mResult and $400) <> 0  then break;
   application.ProcessMessages;
   sleep(0);
 end;
 if (Mresult and $400) = 0  then result:=-13
                              else begin
                                 mResult:=mResult and $3FF;
                                 Result:=mResult*10.0/$3FF;
                              end;
end;

function TUIB.getADCX(index: integer): string;
var
  stTime  :tdateTime;
  i1      :integer;
  mResult :Integer;
  sign    :char;
begin
 if not (index in [0..11]) then
 begin
   MessageBox(0,pchar('UIB . Index out of range :'+IntToStr(Index))
   ,'Error',mb_ok);
 end;
 subaddr:=Index mod 6;
 Write(Index div 6);
 stTime:=now;
 i1:=0;
 while (i1*Sleep0Time)<100 do
 begin
   inc(i1);
   subaddr:=index mod 6;
   mResult:=read;
   if (mResult and $400) <> 0  then break;
   sleep(0);
   application.ProcessMessages;
 end;
 if (Mresult and $400) = 0  then result:='XXXXXXXX'
                              else begin
                                 result:=format('%d %d 1 %d ',[mresult shr 12,(mresult shr 11) and 1,mresult and $3FF ]);
                              end;
end;

function TUIB.GetDigital(Index: Integer): Integer;
var
 i1      :Integer;
begin
 if not (index in [0..15]) then
 begin
   MessageBox(0,pchar('UIB . Index out of range :'+IntToStr(Index))
   ,'Error',mb_ok);
 end;
 subaddr:= 6;
 write(Index div 8);
 stTime:=now;
 sleep(10);
 i1:=read;
 i1:=i1;
 i1:=i1 shr ( index mod 8);
 result:=i1 and $1;
end;
var
 i1:integer;

{ TKP }

function TKP.GetCounter;
var
  i4,i1,i2,i3:word;

begin
  subaddr:=Index;
  NAFR16(Station,Subaddr,28);
  i1:=read;
  i1:=not i1;
  LastValue:=i1;
  i3:=0;
  for i2:= 0 to 15 do
    begin
     i4:=(I1 and (1 shl i2));
     if i4<>0 then i3:=($8000 shr i2) or i3;
    end;
  LastValue1:=i3;
  result:=(i3 and $F)+((i3 shr 4) and $F)*10+((i3 shr 8) and $F)*100+((i3 shr 12) and $F)*1000;
//  exit;
  result:=0;
  for i1:=0 to 3 do
   begin
     result:=result*10;
     case (i3 shr 12 ) of
        0:result:=result+0;
        15:result:=result+0;
        1:result:=result+1;
        2:result:=result+2;
        3:result:=result+3;
        4:result:=result+4;
        5:result:=result+5;
        6:result:=result+6;
        7:result:=result+7;
        8:result:=result+8;
        9:result:=result+9;
       else result:=-100;
     end;
     i3:=i3 shl 4;
   end;
end;

function TKP.GetCounter_dec;
var
  i4,i1,i2,i3:word;
begin
  subaddr:=Index;
  NAFR16(Station,Subaddr,28);
  i1:=read;
  i1:=not i1;
  LastValue:=i1;
  i3:=0;
  for i2:= 0 to 15 do
    begin
     i4:=(i1 and (1 shl i2));
     if i4<>0 then i3:=($8000 shr i2) or i3;
    end;
  result:=(i3 and $F)+((i3 shr 4) and $F)*10+((i3 shr 8) and $F)*100+((i3 shr 12) and $F)*1000;
  result:=0;
  for i1:=0 to 3 do
   begin
     result:=result*10;
     case (i3 shr 12 ) of
        0:result:=result+0;
        15:result:=result+0;
        1:result:=result+1;
        2:result:=result+2;
        3:result:=result+3;
        4:result:=result+4;
        5:result:=result+5;
        6:result:=result+6;
        7:result:=result+7;
        8:result:=result+8;
        9:result:=result+9;
       else result:=-100;
     end;
     i3:=i3 shl 4;
   end;
end;

function TKP.GetF(Index: Integer): Integer;
var
  i1,i2:word;
begin
  subaddr:=Index;
  NAFR16(Station,Subaddr,28);
  i1:=read;
  i2:=0;
  while i1>0 do begin
                   i1:=(i1 shl 1) and $FFF;
                   inc(i2);
                end;
  result:=i2;
end;

function TKP.GetValue(Index: Integer): Integer;
var
  i1,i2:word;
begin
  subaddr:=Index;
  NAFR16(Station,Subaddr,28);
  Result:=read;
end;

{ TKB002 }


function TKB002.ReadSubaddr(Index: Integer): word;
begin
 subaddr:=index;
 result:=read;
end;

procedure TKB002.WriteSubaddr(Index: Integer; value: word);
begin
 subaddr:=index;
 write(value);
end;
var
  st,et:double;
  appname:string;

initialization

  appname:=paramstr(0);
end.
