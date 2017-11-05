//4
unit uwebserv;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Buttons, ExtCtrls, HTTPSend, ulkjson, blcksock, winsock,
  Synautil, strutils, AppEvnts, Menus, inifiles, das_const;

type
  THTTPSRVForm = class(TForm)
    Panel1: TPanel;
    Timer1: TTimer;
    Memo2: TMemo;
    URLED: TEdit;
    SpeedButton1: TSpeedButton;
    Memobody: TMemo;
    ApplicationEvents1: TApplicationEvents;
    PopupMenu1: TPopupMenu;
    Restore1: TMenuItem;
    Minimize1: TMenuItem;
    quit1: TMenuItem;
    Restart1: TMenuItem;
    kgu1stdtxt: TStaticText;
    kgu1freqtxt: TStaticText;
    kgu2stdtxt: TStaticText;
    kgu2freqtxt: TStaticText;
    tmr1: TTimer;
    procedure FormCreate(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
    procedure ApplicationEvents1Minimize(Sender: TObject);
    procedure quit1Click(Sender: TObject);
    procedure Minimize1Click(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Restore1Click(Sender: TObject);
    procedure Restart1Click(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure tmr1Timer(Sender: TObject);
  private
    { Private declarations }
  protected
    procedure ControlWindow(var Msg: TMessage); message WM_SYSCOMMAND;
    procedure IconMouse(var Msg: TMessage); message WM_USER + 1;
  public
    procedure Ic(n: Integer; Icon: TIcon);
  end;
//Function setVariable(ObjName,VarName:widestring;value:string);

  TTCPHttpDaemon = class(TThread)
  private
    Sock: TTCPBlockSocket;
  public
    constructor Create;
    destructor Destroy; override;
    procedure Execute; override;
  end;

  TTCPHttpThrd = class(TThread)
  private
    Sock: TTCPBlockSocket;
  public
    Headers: TStringList;
    InputData, OutputData: TMemoryStream;
    constructor Create(hsock: tSocket);
    destructor Destroy; override;
    procedure Execute; override;
    function ProcessHttpRequest(Request, URI: string): integer;
  end;

var
  PortNum: integer = 9090;
  textfromjson: string = '[]';
  currentData: string = '{}';
  testjson: string = '[{"time":"18:57:40","sbrkgu1":0,"sbrkgu2":0,"k1t6":272.73,"k1t12":295.05,"k1t13":288.41,"k1dt5t6":12.15,"k1dt3t4":2.73,"k1sbr":0,' + '"k1vanna":0,"k1bo1":0.37,"k1bo2":0,"k2t6":108.89,"k2t12":211.58,"k2t13":286.86,"k2dt5t6":-2.02,"k2dt3t4":-1.91,"k2sbr":0,"k2vanna":0,' + '"k2bo1":0,"k2bo2":58.79}]';

var
//*counters variables
  FullProgPath: PChar;
  need_terminate: boolean = false;
  kgu_counter_com_number: array[0..1] of char = (#6, #7);
  freq, msectime: int64;
  kgu_st_time: array[0..1, 0..7] of int64;
  kgu_sumx, kgu_sumx2: array[0..1, 0..7] of double;
  kgu_freqHist: array[0..1, 0..7, 0..10] of double;
  kgu1port: word = 100;
  kgu2port: word = 100;
  cntVal: dword;
  skgu_freq: array[0..1, 0..7] of int64;
  kgu_std, kgu_mean: array[0..1, 0..7] of double;
  kgu_freq: array[0..1, 0..7] of double;
  kgu_counter: array[0..1, 0..7] of dword;
  nSum: integer = 0;
  HTTP: THTTPSend = nil;
  HTTPsrv: TTCPHttpDaemon;
  HTTPSRVFORM: THTTPSRVFORM;
  URL: string;
  Histjson: tstringlist;
  subobj: tlkjsonobject;
  LastUpdate: double = 0;

//*

implementation

uses
  Unit1, shellapi, i7000, i7000u, dcon_pc;

{$R *.dfm}
type
  PRaiseFrame = ^TRaiseFrame;

  TRaiseFrame = packed record
    NextRaise: PRaiseFrame;
    ExceptAddr: Pointer;
    ExceptObject: TObject;
    ExceptionRecord: PExceptionRecord;
  end;

function GenerateOutText(inlist: tstringlist): string;
var
  i: integer;
  str1: string;
begin
  writeTimeLog('generate begin');

  str1 := '[';
  for i := 0 to inlist.Count - 1 do
    str1 := str1 + inlist[i] + ', ';
  str1 := str1 + ']';
  writeTimeLog('generate end');
  result := str1;
end;

procedure THTTPSRVForm.IconMouse(var Msg: TMessage);
var
  p: tpoint;
begin
  GetCursorPos(p); // Запоминаем координаты курсора мыши
  case Msg.LParam of  // Проверяем какая кнопка была нажата
    WM_LBUTTONUP, WM_LBUTTONDBLCLK: {Действия, выполняемый по одинарному или двойному щелчку левой кнопки мыши на значке. В нашем случае это просто активация приложения}
      begin
//        ShowWindow(Application.Handle, SW_SHOW); // Восстанавливаем кнопку программы
        ShowWindow(Handle, SW_SHOW); // Восстанавливаем окно программы
      end;
    WM_RBUTTONUP: {Действия, выполняемый по одинарному щелчку правой кнопки мыши}
      begin
        SetForegroundWindow(Handle);                   // Восстанавливаем программу в качестве переднего окна
        PopupMenu1.Popup(p.X, p.Y);  // Заставляем всплыть тот самый TPopUp о котором я говорил чуть раньше
        PostMessage(Handle, WM_NULL, 0, 0);
      end;
  end;
end;

procedure THTTPSRVForm.Ic(n: Integer; Icon: TIcon);
var
  Nim: TNotifyIconData;
begin
  with Nim do
  begin
    cbSize := SizeOf(Nim);
    Wnd := Handle;
    uID := 1;
    uFlags := NIF_ICON or NIF_MESSAGE or NIF_TIP;
    hicon := Icon.Handle;
    uCallbackMessage := wm_user + 1;
    szTip := 'WEB-Shell interface server';
  end;
  case n of
    1:
      Shell_NotifyIcon(Nim_Add, @Nim);
    2:
      Shell_NotifyIcon(Nim_Delete, @Nim);
    3:
      Shell_NotifyIcon(Nim_Modify, @Nim);
  end;
end;

procedure THTTPSRVForm.ControlWindow(var Msg: TMessage);
begin
  if Msg.WParam = SC_MINIMIZE then
  begin
    ShowWindow(Handle, SW_HIDE);  // ???????? ?????????
//    ShowWindow(Application.Handle, SW_HIDE);  // ???????? ?????? ? TaskBar'?
  end
  else
    inherited;
end;

procedure THTTPSRVForm.FormCreate(Sender: TObject);
var
  ff: tfilestream;
  str1: string;
  objFileName: string;
  strlist: tstringlist;
begin
  writetimelog('wait start' + IntToStr(trunc((now - StartTime) * 24 * 3600)));
  while (now - StartTime) * 24 * 3600 < 4 do
    application.ProcessMessages;
  writetimelog('wait end ' + IntToStr(trunc((now - StartTime) * 24 * 3600)));
  HTTPsrv := TTCPHttpDaemon.create;
(*
  ObjFileName := application.ExeName+'.jdata';
  if fileexists(ObjFileName) then  begin
    strlist:=tstringlist.Create;
    strlist.LoadFromFile(ObjFileName);
    str1:=strlist.Text;
    jsonobj := TlkJSON.ParseText(str1) as TlkJSONobject;
  end else *)
  timer1.OnTimer(self);
  application.Minimize;
  Ic(1, Application.Icon);  // ????????? ?????? ? ????
  timer1.OnTimer(self);
  application.Minimize;

end;

constructor TTCPHttpDaemon.Create;
begin
  inherited create(false);
  sock := TTCPBlockSocket.create;
  FreeOnTerminate := true;
  Priority := tpNormal;
end;

destructor TTCPHttpDaemon.Destroy;
begin
  Sock.free;
  inherited Destroy;
end;

procedure TTCPHttpDaemon.Execute;
var
  ClientSock: TSocket;
begin
  writeTimeLog('open sock');
  with sock do
  begin
    CreateSocket;
    setLinger(true, 10);
    bind('0.0.0.0', IntToStr(PortNum));
    listen;
    writeTimeLog('Listen sock');
    repeat
      if need_terminate then
      begin
        writeTimeLog('Client terminated');
        break;
      end;
      if canread(1000) then
      begin
        writeTimeLog('Client read sock');
        if need_terminate then
          exit;
        ClientSock := accept;
        if lastError = 0 then
          TTCPHttpThrd.create(ClientSock);
      end;
    until false;
  end;
end;

{ TTCPHttpThrd }

constructor TTCPHttpThrd.Create(Hsock: TSocket);
begin
  writeTimeLog('TCPHttpThrd.Create');

  inherited create(false);
  sock := TTCPBlockSocket.create;
  Headers := TStringList.Create;
  InputData := TMemoryStream.Create;
  OutputData := TMemoryStream.Create;
  Sock.socket := Hsock;
  FreeOnTerminate := true;
  Priority := tpNormal;
end;

destructor TTCPHttpThrd.Destroy;
begin
  Sock.free;
  Headers.Free;
  InputData.Free;
  OutputData.Free;
  inherited Destroy;
end;

procedure TTCPHttpThrd.Execute;
var
  b: byte;
  timeout: integer;
  s: string;
  method, uri, protocol: string;
  size: integer;
  x, n: integer;
  resultcode: integer;
begin
  timeout := 120000;
  //read request line
  s := sock.RecvString(timeout);
  if sock.lasterror <> 0 then
    Exit;
  if s = '' then
    Exit;
  method := fetch(s, ' ');
  if (s = '') or (method = '') then
    Exit;
  uri := fetch(s, ' ');
  if uri = '' then
    Exit;
  protocol := fetch(s, ' ');
  headers.Clear;
  size := -1;
  //read request headers
  if protocol <> '' then
  begin
    if pos('HTTP/', protocol) <> 1 then
      Exit;
    repeat
      s := sock.RecvString(timeout);
      if sock.lasterror <> 0 then
        Exit;
      if s <> '' then
        Headers.add(s);
      if Pos('CONTENT-LENGTH:', Uppercase(s)) = 1 then
        size := StrToIntDef(SeparateRight(s, ' '), -1);
    until s = '';
  end;
  //recv document...
  InputData.Clear;
  if size >= 0 then
  begin
    InputData.SetSize(size);
    x := Sock.RecvBufferEx(InputData.Memory, size, timeout);
    InputData.SetSize(x);
    if sock.lasterror <> 0 then
      Exit;
  end;
  OutputData.Clear;
  resultcode := ProcessHttpRequest(method, uri);
  sock.SendString('HTTP/1.0 ' + IntTostr(resultcode) + CRLF);
  if protocol <> '' then
  begin
    headers.Add('Content-length: ' + IntTostr(OutputData.Size));
    headers.Add('Connection: close');
    headers.Add('Date: ' + Rfc822DateTime(now));
    headers.Add('Server: Synapse HTTP server demo');
    headers.Add('');
    for n := 0 to headers.count - 1 do
      sock.sendstring(headers[n] + CRLF);
  end;
  if sock.lasterror <> 0 then
    Exit;
  Sock.SendBuffer(OutputData.Memory, OutputData.Size);
end;

function TTCPHttpThrd.ProcessHttpRequest(Request, URI: string): integer;
var
  l: TStringlist;
  resp: string;
  stmp, jreq: string;
  amppos: integer;
begin
  LastIncomeConnection := now;
//sample of precessing HTTP request:
// InputData is uploaded document, headers is stringlist with request headers.
// Request is type of request and URI is URI of request
// OutputData is document with reply, headers is stringlist with reply headers.
// Result is result code
  result := 504;
  if Request = 'GET' then
  begin
    headers.Clear;
    headers.Add('Content-type: Text/Html');
    l := TStringList.Create;
    try
      if (pos('callback=', URI) <> 0) then
      begin
        stmp := copy(URI, pos('callback=', URI) + 9, length(URI));
        amppos := pos('get_member', stmp);
        if amppos > 0 then
          jreq := copy(stmp, 1, amppos - 2);
      end;
      if (pos('get_hist', URI) <> 0) then
        resp := TextFromJson
      else
        resp := currentdata;
      resp := jreq + '(' + resp + ');';
      l.Add(resp);
      l.SaveToStream(OutputData);
    finally
      l.free;
    end;
    Result := 200;
  end;
end;

procedure THTTPSRVForm.SpeedButton1Click(Sender: TObject);
var
  JSON: TlkJSONobject;
  Data: TlkJSONobject;
  jcurdata: TlkJSONobject;
  t_id, t_vc, t_vn, t_vdn, t_vv, t_vt, t_vs: tlkjsonlist;
  jtype: string;
  jsonstr: string;
  i, id: integer;
  r1, r2: double;
//  rl : tstringlist;
  offset, position, h, g: integer;
  s: string;
  ff: tfilestream;
  js: tlkjsonstring;
//  jn,jval :tlkjsonnumber;
  rlist: tlkjsonlist;
  jnull: tlkjsonnull;
  r: array[0..255] of string;
  pointpos: integer;
  resrecord: string;
  wret: word;
  dtime: double;
  systime: _systemtime;
  chnum, i1, i2, i3: integer;
  Backup_history: string;

  procedure read_counter_and_reset(kgunum: integer; chnum: integer);
  var
    i1: integer;
    fintime: int64;
  begin
    QueryPerformanceCounter(fintime);
    wret := DCON_Read_Counter(kgu_counter_com_number[kgunum], 1, -1, chnum, 0, 200, @cntVal);
    if wret > 0 then
    begin
//      writetimelog('Error read counter KGU = ' + IntToStr(kgunum + 1) + ' channel = ' + IntToStr(chnum));
      exit;
    end;
    dtime := (fintime - kgu_st_time[kgunum, chnum]) * 1.0 / freq;
    kgu_freq[kgunum, chnum] := cntVal * 30.0 / dtime;
    wret := DCON_Clear_Counter(kgu_counter_com_number[kgunum], 1, -1, chnum, 0, 200);
    QueryPerformanceCounter(kgu_st_time[kgunum, chnum]);

    for i1 := 0 to 9 do
    begin
      kgu_freqHist[kgunum, chnum, i1] := kgu_freqHist[kgunum, chnum, i1 + 1];
    end;
    kgu_freqHist[kgunum, chnum, 10] := kgu_freq[kgunum, chnum];
    skgu_freq[kgunum, chnum] := 0;
    for i1 := 0 to 10 do
    begin
      if kgu_freqhist[kgunum, chnum, i1] < 10 then
        skgu_freq[kgunum, chnum] := skgu_freq[kgunum, chnum] + trunc(kgu_freq[kgunum, chnum])
      else
        skgu_freq[kgunum, chnum] := skgu_freq[kgunum, chnum] + trunc(kgu_freqhist[kgunum, chnum, i1]);
    end;
    skgu_freq[kgunum, chnum] := (skgu_freq[kgunum, chnum] div 10000) * 1000;

    kgu_sumx[kgunum, chnum] := kgu_sumx[kgunum, chnum] + kgu_freq[kgunum, chnum];
    kgu_sumx2[kgunum, chnum] := kgu_sumx2[kgunum, chnum] + kgu_freq[kgunum, chnum] * kgu_freq[kgunum, chnum];
    if (nsum > 2) then
    begin
      kgu_mean[kgunum, chnum] := kgu_sumx[kgunum, chnum] / nsum;
      kgu_std[kgunum, chnum] := kgu_sumx2[kgunum, chnum] - 2 * kgu_sumx[kgunum, chnum] * kgu_mean[kgunum, chnum] + nsum * kgu_mean[kgunum, chnum] * kgu_mean[kgunum, chnum];
      if (kgu_std[kgunum, chnum] >= 0) then
      begin
        kgu_std[kgunum, chnum] := sqrt(kgu_std[kgunum, chnum] / (nsum - 1));
      end;
    end;
  end;

  procedure AddVarToRecord(varname, varval: string);
  begin
    resrecord := resrecord + '"' + varname + '" : ' + varval + ', ';
  end;

begin
  LastUpdate := now;
  timer1.Enabled := false;
  if (now - starttime) * 24 * 3600 > 3600 * 2 then
  begin
    writetimelog('#### restart application/ Reason: 4 hour uptime ############################################');

    FullProgPath := PChar(Application.ExeName);
    need_terminate := true;
   // ShowWindow(Form1.handle,SW_HIDE);
    WinExec(FullProgPath, SW_SHOW); // Or better use the CreateProcess function
    Ic(2, Application.Icon);  // Удаляем значок из трея
    Application.Terminate; // or: Clos e;
    exit;
  end;
  if ((now - LastIncomeConnection) * 24 * 60 * 60 > 120) then
  begin
    writetimelog('#### restart application reason: No income conenction for 5 min ############################################');
    need_terminate := true;
    FullProgPath := PChar(Application.ExeName);
   // ShowWindow(Form1.handle,SW_HIDE);
    WinExec(FullProgPath, SW_SHOW); // Or better use the CreateProcess function
    Ic(2, Application.Icon);  // Удаляем значок из трея

    Application.Terminate; // or: Close;
    exit;
  end;
  caption := formatDateTime('dd/mm/yyyy HH:NN:SS', now) + formatDateTime(' Старт:dd/mm/yyyy HH:NN:SS', startTime);
  for chnum := 0 to 7 do
    read_counter_and_reset(0, chnum);
  for chnum := 0 to 7 do
    read_counter_and_reset(1, chnum);
  nsum := nsum + 1;

  kgu1freqtxt.Caption := format('Freq = %d', [skgu_freq[0, 1] * 2]);
  kgu2freqtxt.Caption := format('Freq = %d', [skgu_freq[0, 1] * 2]);

  if (nsum > 2) then
  begin
    if (kgu_freq[0, 1] > 0) then
      kgu1stdtxt.Caption := format('STD dev = %.2f%', [kgu_std[0, 1] * 100 / kgu_freq[0, 1]]);
    if (kgu_freq[1, 1] > 0) then
      kgu2stdtxt.Caption := format('STD dev = %.2f%', [kgu_std[1, 1] * 100 / kgu_freq[1, 1]]);
  end;

  resrecord := '{';
  decimalseparator := '.';
  if http <> nil then
  begin
    http.Free;
    http := nil;
  end;
  HTTP := THTTPSend.Create;
//  rl:=tstringlist.Create;
  urled.Text := url;
  try
    HTTP.HTTPMethod('GET', urled.text);
    Memobody.Lines.LoadFromStream(HTTP.Document);
//    if (trunc(now*24*3600) mod 2) = 0 then begin
//      Memo2.Lines.Assign(HTTP.Headers);
//      Memo2.Lines.insert(0,formatdatetime('hh:nn:ss:zzz',now));
//    end;
    jsonstr := system.copy(memobody.Lines[0], pos('{', memobody.Lines[0]), length(memobody.Lines[0]));
    ;
    for i := 1 to memobody.Lines.Count - 2 do
    begin
      jsonstr := jsonstr + memobody.Lines[i];
    end;
    jsonstr := jsonstr + copy(memobody.Lines[memobody.Lines.Count - 1], 1, length(jsonstr) - 1);
//    CurrentData :=jsonstr;
    rlist := tlkjsonlist.Create;
    jnull := tlkjsonnull.Create;
    Data := TlkJSON.ParseText(jsonstr) as TlkJSONobject;
    if Data = nil then
    begin
      memo2.Lines.Clear;
      memo2.Lines.add('parse error');
      memo2.Lines.add(jsonstr);
      timer1.Enabled := true;
      exit;
    end;
    case Data.Field['ID'].SelfType of
      jsBase:
        jtype := 'other type: xs is base';
      jsNumber:
        jtype := 'other type: xs is number';
      jsString:
        jtype := 'other type: xs is string';
      jsBoolean:
        jtype := 'other type: xs is boolean';
      jsNull:
        jtype := 'other type: xs is null';
      jsList:
        jtype := 'other type: xs is list';
      jsObject:
        jtype := 'other type: xs is object';
    end;
    t_id := Data.field['ID'] as tlkjsonlist;
    t_vn := Data.field['VN'] as tlkjsonlist;
    t_vc := Data.field['VC'] as tlkjsonlist;
    t_vv := Data.field['VV'] as tlkjsonlist;
    t_vt := Data.field['VT'] as tlkjsonlist;
    for h := 0 to 93 do
    begin
//      jnull := tlkjsonnull.Create;
      rlist.Add(tlkjsonnull.Create);
    end;
    offset := 0;
    h := 0;
    memo2.Lines.Clear;
    while (h < t_id.Count) do
    begin
      memo2.Lines.Add(IntToStr(h));
      id := (t_id.Child[h] as tlkjsonnumber).Value;
      g := (t_vc.Child[h] as tlkjsonnumber).Value;
      r[id] := '0';
      position := offset;
//            rl.Add(IntToStr(id)+' : 0,');
      while (position < (offset + g)) do
      begin
        if ((t_vn.child[position] as tlkjsonstring).Value = 'VALUE') then
        begin
          if (id = 45) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[0, 0]]);
          if (id = 46) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[0, 1]]);
          if (id = 47) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[0, 2]]);
          if (id = 95) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[1, 0]]);
          if (id = 96) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[1, 1]]);
          if (id = 97) then
            (t_vv.Child[position] as tlkjsonstring).Value := format('%d', [skgu_freq[1, 2]]);
          s := (t_vv.Child[position] as tlkjsonstring).Value;
          s := ansireplacestr(s, ',', '.');
          pointpos := pos('.', s);
          if pointpos > 0 then
          begin
            s := system.copy(s, 1, pointpos + 2);
          end;
          r[id] := s;
          memo2.Lines[memo2.Lines.Count - 1] := memo2.Lines[memo2.Lines.Count - 1] + ' = ' + s;
//                 rl[rl.Count-1]:=inttostr(id)+' : '+s+',';
        end;
        inc(position);
      end;
      offset := offset + g;
      inc(h);
      memo2.Lines[memo2.Lines.Count - 1] := memo2.Lines[memo2.Lines.Count - 1] + ' fin';
    end;
    CurrentData := tlkjson.GenerateText(Data);
    Data.Free;
  finally
    HTTP.Free;
    http := nil;
  end;
  if ((now - prevUpdate) * 24 * 3600 < 30) then
  begin
    timer1.Enabled := true;
    exit;
  end;

  if ((now - prevUpdate) * 24 * 3600 > 0) then
  begin

    prevUpdate := now;
//    var k1t11 = toChart(r[28]);
//    var k1t7 = toChart(r[26]);
    AddVarToRecord('time', '"' + formatdatetime('hh:nn:ss', now) + '"');
    AddVarToRecord('date', '"' + formatdatetime('dd:mm:yy', now) + '"');
    AddVarToRecord('k1t6', r[12]);
    AddVarToRecord('k1t7', r[26]);
    AddVarToRecord('k1t11', r[28]);
    AddVarToRecord('k1t12', r[29]);
    AddVarToRecord('k1t13', r[111]);
    AddVarToRecord('k1t5', r[11]);
    AddVarToRecord('k1t3', r[9]);
    AddVarToRecord('k1t4', r[10]);
    r1 := strToFloat(r[11]) - strtofloat(r[12]);
    AddVarToRecord('k1dt5t6', format('%f', [r1]));
    r1 := strToFloat(r[9]) - strtofloat(r[10]);
    AddVarToRecord('k1dt3t4', format('%f', [r1]));
    AddVarToRecord('k1sbr', r[35]);
    AddVarToRecord('k1vanna', r[34]);
    AddVarToRecord('k1bo1', r[32]);
    AddVarToRecord('k1bo2', r[33]);
    AddVarToRecord('sbrkgu1', r[35]);

    AddVarToRecord('k2t6', r[62]);
    AddVarToRecord('k2t7', r[76]);
    AddVarToRecord('k2t11', r[78]);
    AddVarToRecord('k2t12', r[79]);
    AddVarToRecord('k2t13', r[112]);
    AddVarToRecord('k2t5', r[61]);
    AddVarToRecord('k2t3', r[59]);
    AddVarToRecord('k2t4', r[60]);

    //        k2sdt5t6 = k2dt5t6.toString();
    r1 := strToFloat(r[61]) - strtofloat(r[62]);
    AddVarToRecord('k2dt5t6', format('%f', [r1]));

    //        k2sdt3t4 = k2dt3t4.toString();
    r1 := strToFloat(r[59]) - strtofloat(r[60]);
    AddVarToRecord('k2dt3t4', format('%f', [r1]));

    AddVarToRecord('k2sbr', r[85]);
    AddVarToRecord('k2vanna', r[84]);
    AddVarToRecord('k2bo1', r[82]);
    AddVarToRecord('k2bo2', r[83]);
    AddVarToRecord('sbrkgu2', r[85]);


      //amchart process
    resrecord := resrecord + ' }';
    writetimelog('## Update History = ' + resrecord);

    histjson.Add(resrecord);
    while histjson.Count > 24 * 60 * 2 do
      histjson.Delete(0);
    textfromJson := GenerateOutText(histjson);
    if (length(textfromjson) > 1000) then
    begin
      if fileexists(extractfilepath(application.ExeName) + '\history.json') then
        deletefile(extractfilepath(application.ExeName) + '\history.json');
      ff := tfilestream.Create(extractfilepath(application.ExeName) + '\history.json', fmcreate or fmOpenWrite or fmsharedenynone);

      ff.Write(textfromjson[1], length(textfromjson));
      ff.Free;
      Backup_history := extractfilepath(application.ExeName) + '\history.' + formatDateTime('mm_dd_hh', now);
      if fileexists(Backup_history) then
        deletefile(Backup_history);
      ff := tfilestream.Create(Backup_history, fmcreate or fmOpenWrite or fmsharedenynone);
      ff.Write(textfromjson[1], length(textfromjson));
      ff.Free;

    end
    else
      writetimelog('Empty history log');

//      memo2.Lines.Assign(rl);
//      memo2.lines.add(textfromJson);
    caption := inttostr(rlist.Count);
  end;
//  rl.Free;
  timer1.Enabled := true;

end;

procedure THTTPSRVForm.SpeedButton2Click(Sender: TObject);
begin
  form1.Show;
end;

var
  jhist: tlkjsonlist;
  jcount: integer;
  jo: tlkjsonobject;
  jb: tlkjsonbase;
  str: string;

procedure THTTPSRVForm.ApplicationEvents1Minimize(Sender: TObject);
begin
  PostMessage(Handle, WM_SYSCOMMAND, SC_MINIMIZE, 0);
end;

procedure THTTPSRVForm.quit1Click(Sender: TObject);
begin
  application.Terminate;
end;

procedure THTTPSRVForm.Minimize1Click(Sender: TObject);
begin
//  ShowWindow(Application.Handle, SW_hide); // Восстанавливаем кнопку программы
  ShowWindow(Handle, SW_hide); // Восстанавливаем окно программы
  application.Minimize;
end;

procedure THTTPSRVForm.FormClose(Sender: TObject; var Action: TCloseAction);
begin
//  ShowWindow(Application.Handle, SW_hide); // прячем  кнопку программы
  ShowWindow(Handle, SW_hide);
  Action := caNone;
end;

var
  ini: tinifile;
  jconf: tlkjsonobject;

procedure THTTPSRVForm.Restore1Click(Sender: TObject);
begin
//  ShowWindow(Application.Handle, SW_SHOW); // Восстанавливаем кнопку программы
  ShowWindow(Handle, SW_SHOW); // Восстанавливаем окно программы

end;

procedure THTTPSRVForm.Restart1Click(Sender: TObject);
var
  FullProgPath: PChar;
begin
  FullProgPath := PChar(Application.ExeName);
   // ShowWindow(Form1.handle,SW_HIDE);
  WinExec(FullProgPath, SW_SHOW); // Or better use the CreateProcess function
  Application.Terminate; // or: Close;
  exit;
end;

var
  confjson: tstringlist;
  i1, i2, i3, i4, i5, i6: integer;
  str1, str2: string;

var
  // ????????? ?? ??????? ?????? ??????????
  CurrentRaiseList: Pointer = nil;

// ??????? ?????????? ??????? ?????????? ?? ?????
function GetNextException: Pointer;
begin
  if CurrentRaiseList = nil then
    CurrentRaiseList := RaiseList;
  if CurrentRaiseList <> nil then
  begin
    Result := PRaiseFrame(CurrentRaiseList)^.ExceptObject;
    PRaiseFrame(CurrentRaiseList)^.ExceptObject := nil;
    CurrentRaiseList := PRaiseFrame(CurrentRaiseList)^.NextRaise;
  end
  else
    Result := nil;
end;

var
  ExceptionStack: TList;
  E: Exception;
  wret: word;
  kgunum, chnum: integer;

procedure THTTPSRVForm.FormDestroy(Sender: TObject);
begin
  Ic(2, Application.Icon);  // ????????? ?????? ? ????
end;

procedure THTTPSRVForm.tmr1Timer(Sender: TObject);
begin
   if (now - LastUpdate) * 24 * 3600 > 60 then
  begin
    writetimelog('#### restart application/ Reason: update timer inactive for 60 sec  ############################################');

    FullProgPath := PChar(Application.ExeName);
    need_terminate := true;
   // ShowWindow(Form1.handle,SW_HIDE);
    WinExec(FullProgPath, SW_SHOW); // Or better use the CreateProcess function
    Ic(2, Application.Icon);  // Удаляем значок из трея
    Application.Terminate; // or: Close;
    exit;
  end;

end;

initialization
  startTime := now;
  LastUpdate := now;

  writeTimeLog('init  begin');

  confjson := tstringlist.Create;
  histJson := tstringlist.Create;
  url := 'http://159.93.126.233:8080/proxy.cgi?id=6';
   //  urled.Text:='http://10.0.10.30:8080/proxy.cgi?id=6';

  if fileexists(extractfilepath(application.ExeName) + '\config.json') then
  begin
    confjson.LoadFromFile(extractfilepath(application.ExeName) + '\config.json');
    jconf := tlkjson.parsetext(confjson[0]) as tlkjsonobject;
    if jconf <> nil then
    begin
      if jconf.field['url'] <> nil then
        url := (jconf.field['url'] as tlkjsonstring).Value;
      if jconf.field['kgu1_counter_com_number'] <> nil then
        kgu_counter_com_number[0] := char(strtoint((jconf.field['kgu1_counter_com_number'] as tlkjsonstring).Value));
      if jconf.field['kgu2_counter_com_number'] <> nil then
        kgu_counter_com_number[1] := char(strtoint((jconf.field['kgu2_counter_com_number'] as tlkjsonstring).Value));
    end;

  end;

  if fileexists(extractfilepath(application.ExeName) + '\history.json') then
  begin
    histjson.LoadFromFile(extractfilepath(application.ExeName) + '\history.json');
    textfromJson := histjson.GetText;
    str1 := textfromJson;
    histJson.Clear;
    i1 := 0;
    while (length(str1) > 2) do
    begin
      i2 := pos('{', str1);
      i3 := pos('}', str1);
      if ((i2 > 0) and (i3 > 0) and (i2 < i3)) then
      begin
        str2 := system.copy(str1, i2, i3 - i2 + 1);
        str1 := system.copy(str1, i3 + 1, length(str1));
        histJson.add(str2);

      end
      else
        break;

    end;
    textfromJson := GenerateOutText(histjson);
  end
  else
  begin
    textfromJson := '[]';
  end;
  LastIncomeConnection := now;
  writeTimeLog('init  counters');

  kgu1port := Open_Com(kgu_counter_com_number[0], 9600, char(8), char(0), char(0));
  kgu2port := Open_Com(kgu_counter_com_number[1], 9600, char(8), char(0), char(0));
  QueryPerformanceFrequency(freq);
  nsum := 0;
  for kgunum := 0 to 1 do
    for chnum := 0 to 7 do
    begin
      wret := DCON_Clear_Counter(kgu_counter_com_number[kgunum], 1, -1, chnum, 0, 200);
      QueryPerformanceCounter(kgu_st_time[kgunum, chnum]);
      kgu_sumx[kgunum, chnum] := 0;
      kgu_sumx2[kgunum, chnum] := 0;
      for i1 := 0 to 10 do
      begin
        kgu_freqHist[kgunum, chnum, i1] := 0;
      end;
    end;

  writeTimeLog('init  end');

finalization
  writeTimeLog('finalize begin');

end.

