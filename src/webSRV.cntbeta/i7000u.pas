unit I7000u;

interface

uses
  SysUtils, StdCtrls;

type PSingle=^Single;
type PWord=^Word;
type PDWord=^LongInt;

Function  IOpenCom(cComPort :char; dwBaudRate : LongInt):Word;
Function  IGetErrorString(wErrCode : Word ): String;
Procedure ISetCOMString( cb : TComboBox; iStart, iEnd : integer);
Procedure ISetBaudRateString( cb : TComboBox);


Var
   gcPort       : Char;    //Global Char
   gdwBaudRate  : LongInt;
   gwCheckSum   : Word;
   gcDataBit    : Char;
   gcParity     : Char;
   gcStopBit    : Char;

   gszSend      : PChar;   //Global StringZ
   gszReceive   : PChar;

   gw7000       : Array[0..10] of Word;
   gf7000       : Array[0..10] of Single;
   gdwBuf       : Array[0..10] of LongInt;
   gfBuf        : Array[0..10] of Single;

implementation

uses I7000;


//*************************************
Function IOpenCom(cComPort :char ; dwBaudRate : LongInt):Word;
begin
	IOpenCom := Open_Com( cComPort, dwBaudRate, char(8), char(0) , char(0) );
end;

//*************************************
Procedure ISetCOMString( cb : TComboBox; iStart, iEnd : integer);
var
   i : integer;
begin
     cb.Items.Clear;
     for i := iStart to iEnd do
         cb.Items.Add( 'COM' + IntToStr(i) );
     cb.ItemIndex := 0;
end;

//*************************************
Procedure ISetBaudRateString( cb : TComboBox);
begin
     cb.Items.Clear;
     cb.Items.Add('115200');
     cb.Items.Add('57600');
     cb.Items.Add('38400');
     cb.Items.Add('19200');
     cb.Items.Add('9600');
     cb.Items.Add('4800');
     cb.Items.Add('2400');
     cb.Items.Add('1200');
     cb.ItemIndex := 0;
end;


//*************************************
function IGetErrorString( wErrCode : Word ):String ;
Var
    ErrString : String ;
Begin
    Case wErrcode of
	 0: ErrString := 'No Error' ;
	 1: ErrString := 'Function Error';
	 2: ErrString := 'Port Error';
	 3: ErrString := 'Baud Rate Error';
	 4: ErrString := 'Data Error';
	 5: ErrString := 'Stop Error';
	 6: ErrString := 'Parity Error';
	 7: ErrString := 'CheckSum Error';
	 8: ErrString := 'ComPort Not Open';
	 9: ErrString := 'Send Thread Create Error';
	10: ErrString := 'Send Command Error';
	11: ErrString := 'Read Com Port Status Error';
	12: ErrString := 'Result String Check Error';
	13: ErrString := 'Command Error';
	//14: ErrString := '';
	15: ErrString := 'Time Out';
	//16: ErrString := '';
	17: ErrString := 'Module Id Error';
	18: ErrString := 'AD Channel Error';
	19: ErrString := 'Under Input Range';
	20: ErrString := 'Exceed Input Range';
	21: ErrString := 'Invalidate Counter No';
	22: ErrString := 'Invalidate Counter Value';
	23: ErrString := 'Invalidate Gate Mode';
    Else
	    ErrString := 'Unknown Error';
    end;

    IGetErrorString := ErrString ;
end;

//*************************************

end.

