unit I7000;

interface

type PSingle=^Single;
type PWord=^Word;
type PDWord=^LongInt;

//Declare interface of UART.DLL
function Open_Com(cPort:Char; dwBaudRate:LongInt; cData:Char; cParity:Char; cStop:Char): Word;	StdCall;
function Close_Com(cPort:Char): Word;	StdCall;
function ComPortStatus(cPort:Char): Word; StdCall;
function Send_Receive_Cmd(cPort:Char; szCmd,szResult:PChar; wTimeOut,wChkSum:Word; var wT:Word): Word; StdCall;
function Send_Cmd(cPort:Char; szCmd:PChar; wTimeOut:Word; wCheckSum:Word): Word;	StdCall;
function Receive_Cmd(cPort:Char; szResult:PChar; wTimeOut:Word; wCheckSum:Word; var wT:Word): Word;	StdCall;
function Send_Str(cPort:Char; szSend:PChar; wTimeOut:Word): Word; StdCall;
function Receive_Str(cPort:Char; szResult:PChar; wTimeOut:Word; wLen:Word; var wT:Word): Word; StdCall;

function Get_Uart_Version():Word  ;stdCall;
function Change_Baudrate(cPort:Char; dwBaudrate:LongInt):Word stdCall;
function Change_Config(cPort:char; dwBaudrate:LongInt; cData:char; cParity:char;  cStop:char):Word; Stdcall;
function Get_Com_Status(cPort:char ):Word; StdCall
function Send_Binary(cPort:char; szCmd:Pchar; iLen:integer ):Word; stdCall
function Receive_Binary(cPort:char; szResult:Pchar; wTimeOut:Word; wLen:Word; wT:Word):Word stdCall;



//Declare interface of I7000.DLL
function Short_Sub_2(nA: smallint; nB: smallint): smallint;  StdCall;
function Float_Sub_2(fA: single;   fB: single):   single;    StdCall;
function Get_Dll_Version: Word; StdCall;
function Test(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadConfigStatus(wBuf:PWord; fBuf:PSingle; szSend,szReceive:PChar): Word; StdCall;
function AnalogIn(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function AnalogInFsr(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function AnalogInHex(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function AnalogIn8(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function AnalogInAll(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function In8_7017(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function AnalogOut(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function AnalogOutHex(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function AnalogOutFsr(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function AnalogOutReadBack(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function AnalogOutReadBackHex(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;

function DigitalOut(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DigitalOutReadBack(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DigitalIn(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ThermocoupleOpen_7011(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function EnableAlarm(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DisableAlarm(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ClearLatchAlarm(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetAlarmLimitValue(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadAlarmLimitValue(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadOutputAlarmState(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadEventCounter(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ClearEventCounter(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function CounterIn_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadCounterMaxValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetCounterMaxValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar; MaxValue:Double): Word; StdCall;
function ReadAlarmLimitValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetAlarmLimitValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar; MaxValue:Double): Word; StdCall;
function EnableCounterAlarm_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DisableCounterAlarm_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function EnableCounterAlarm_7080D(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DisableCounterAlarm_7080D(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadCounterStatus_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ClearCounter_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadOutputAlarmState_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetInputSignalMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadInputSignalMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function PresetCounterValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar; PresetValue:Double): Word; StdCall;
function ReadPresetCounterValue_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function StartCounting_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetModuleMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadModuleMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetLevelVolt_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadLevelVolt_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetMinSignalWidth_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar; MinWidth:LongInt): Word; StdCall;
function ReadMinSignalWidth_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetGateMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function ReadGateMode_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function DataToLED_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar): Word; StdCall;
function SetConfiguration_7080(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function GetLedDisplay_7033(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function SetLedDisplay_7033(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;

function GetLedDisplay(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function SetLedDisplay(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function SetupLinearMapping(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function EnableLinearMapping(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function DisableLinearMapping(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function ReadLinearMappingStatus(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;

function ReadSourceValueOfLM(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function ReadTargetValueOfLM(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;

function DigitalOut_7016(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;

function DigitalBitOut(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function ReadPowerOnValueForDo(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function ReadSafeValueForDo(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function DigitalInCounterRead(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function ClearDigitalInCounter(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;
function DigitalInLatch(wBuf:PWord; fBuf:PSingle; szSend:PChar; szReceive:PChar):Word; StdCall;

// WatchDog
Function HostIsOK(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function ReadModuleResetStatus(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function ToSetupHostWatchdog(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function ToReadHostWatchdog(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function ReadModuleHostWatchdogStatus(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function ResetModuleHostWatchdogStatus(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function SetSafeValueForDo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function SetPowerOnValueForDo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;
Function SetSafeValueForAo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;

Function ReadSafeValueForAo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;

Function SetPowerOnValueForAo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;

Function ReadPowerOnValueForAo(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;

Function SetPowerOnSafeValue(wBuf:PWord; fBuf:PSingle; szSendTo7000:PChar; szReceiveFrom7000:PChar):Word; StdCall;


// **********************************************************
// **********************************************************
implementation

//Declare implementation of UART.DLL
function Open_Com;                      external 'UART.DLL'  name 'Open_Com';
function Close_Com;                     external 'UART.DLL'  name 'Close_Com';
function ComPortStatus;                 external 'UART.DLL'  name 'ComPortStatus';
function Send_Receive_Cmd;              external 'UART.DLL'  name 'Send_Receive_Cmd';
function Send_Cmd;                      external 'UART.DLL'  name 'Send_Cmd';
function Receive_Cmd;                   external 'UART.DLL'  name 'Receive_Cmd';
function Send_Str;                      external 'UART.DLL'  name 'Send_Str';
function Receive_Str;                   external 'UART.DLL'  name 'Receive_Str';
function Get_Uart_Version;              external 'UART.DLL'  name 'Get_Uart_Version';
function Change_Baudrate;               external 'UART.DLL'  name 'Change_Baudrate';
function Change_config;                 external 'UART.DLL'  name 'Change_Config';
function Get_Com_Status;                external 'UART.DLL'  name 'Get_Com_Status';
function Send_Binary;                   external 'UART.DLL'  name 'Send_Binary';
function Receive_Binary;                external 'UART.DLL'  name 'Receive_Binary';

//Declare implementation of I7000.DLL
function Short_Sub_2;                   external 'I7000.DLL' name 'Short_Sub_2';
function Float_Sub_2;                   external 'I7000.DLL' name 'Float_Sub_2';
function Get_Dll_Version;               external 'I7000.DLL' name 'Get_Dll_Version';
function Test;                          external 'I7000.DLL' name 'Test';
function ReadConfigStatus;              external 'I7000.DLL' name 'ReadConfigStatus';
function AnalogIn;                      external 'I7000.DLL' name 'AnalogIn';
function AnalogInFsr;                   external 'I7000.DLL' name 'AnalogInFsr';
function AnalogInHex;                   external 'I7000.DLL' name 'AnalogInHex';
function AnalogIn8;                     external 'I7000.DLL' name 'AnalogIn8';

function AnalogInAll;                   external 'I7000.DLL' name 'AnalogInAll';

function In8_7017;                      external 'I7000.DLL' name 'In8_7017';
function AnalogOut;                     external 'I7000.DLL' name 'AnalogOut';

function AnalogOutHex;                  external 'I7000.DLL' name 'AnalogOutHex';
function AnalogOutFsr;                  external 'I7000.DLL' name 'AnalogOutFsr';

function AnalogOutReadBack;             external 'I7000.DLL' name 'AnalogOutReadBack';
function AnalogOutReadBackHex;          external 'I7000.DLL' name 'AnalogOutReadBackHex';

function DigitalOut;                    external 'I7000.DLL' name 'DigitalOut';
function DigitalOutReadBack;            external 'I7000.DLL' name 'DigitalOutReadBack';
function DigitalIn;                     external 'I7000.DLL' name 'DigitalIn';
function ThermocoupleOpen_7011;         external 'I7000.DLL' name 'ThermocoupleOpen_7011';
function EnableAlarm;                   external 'I7000.DLL' name 'EnableAlarm';
function DisableAlarm;                  external 'I7000.DLL' name 'EnableAlarm';
function ClearLatchAlarm;               external 'I7000.DLL' name 'ClearLatchAlarm';
function SetAlarmLimitValue;            external 'I7000.DLL' name 'SetAlarmLimitValue';
function ReadAlarmLimitValue;           external 'I7000.DLL' name 'ReadAlarmLimitValue';
function ReadOutputAlarmState;          external 'I7000.DLL' name 'ReadOutputAlarmState';
function ReadEventCounter;              external 'I7000.DLL' name 'ReadEventCounter';
function ClearEventCounter;             external 'I7000.DLL' name 'ClearEventCounter';
function CounterIn_7080;                external 'I7000.DLL' name 'CounterIn_7080';
function ReadCounterMaxValue_7080;      external 'I7000.DLL' name 'ReadCounterMaxValue_7080';
function SetCounterMaxValue_7080;       external 'I7000.DLL' name 'SetCounterMaxValue_7080';
function ReadAlarmLimitValue_7080;      external 'I7000.DLL' name 'ReadAlarmLimitValue_7080';
function SetAlarmLimitValue_7080;       external 'I7000.DLL' name 'SetAlarmLimitValue_7080';
function EnableCounterAlarm_7080;       external 'I7000.DLL' name 'EnableCounterAlarm_7080';
function DisableCounterAlarm_7080;      external 'I7000.DLL' name 'DisableCounterAlarm_7080';
function EnableCounterAlarm_7080D;      external 'I7000.DLL' name 'EnableCounterAlarm_7080D';
function DisableCounterAlarm_7080D;     external 'I7000.DLL' name 'DisableCounterAlarm_7080D';
function ReadCounterStatus_7080;        external 'I7000.DLL' name 'ReadCounterStatus_7080';
function ClearCounter_7080;             external 'I7000.DLL' name 'ClearCounter_7080';
function ReadOutputAlarmState_7080;     external 'I7000.DLL' name 'ReadOutputAlarmState_7080';
function SetInputSignalMode_7080;       external 'I7000.DLL' name 'SetInputSignalMode_7080';
function ReadInputSignalMode_7080;      external 'I7000.DLL' name 'ReadInputSignalMode_7080';
function PresetCounterValue_7080;       external 'I7000.DLL' name 'PresetCounterValue_7080';
function ReadPresetCounterValue_7080;   external 'I7000.DLL' name 'ReadPresetCounterValue_7080';
function StartCounting_7080;            external 'I7000.DLL' name 'StartCounting_7080';
function SetModuleMode_7080;            external 'I7000.DLL' name 'SetModuleMode_7080';
function ReadModuleMode_7080;           external 'I7000.DLL' name 'ReadModuleMode_7080';
function SetLevelVolt_7080;             external 'I7000.DLL' name 'SetLevelVolt_7080';
function ReadLevelVolt_7080;            external 'I7000.DLL' name 'ReadLevelVolt_7080';
function SetMinSignalWidth_7080;        external 'I7000.DLL' name 'SetMinSignalWidth_7080';
function ReadMinSignalWidth_7080;       external 'I7000.DLL' name 'ReadMinSignalWidth_7080';
function SetGateMode_7080;              external 'I7000.DLL' name 'SetGateMode_7080';
function ReadGateMode_7080;             external 'I7000.DLL' name 'ReadGateMode_7080';
function DataToLED_7080;                external 'I7000.DLL' name 'DataToLED_7080';
function SetConfiguration_7080;         external 'I7000.DLL' name 'SetConfiguration_7080';
function GetLedDisplay_7033;            external 'I7000.DLL' name 'GetLedDisplay_7033';
function SetLedDisplay_7033;            external 'I7000.DLL' name 'SetLedDisplay_7033';

function GetLedDisplay;                 external 'I7000.DLL' name 'GetLedDisplay';
function SetLedDisplay;                 external 'I7000.DLL' name 'SetLedDisplay';
function SetupLinearMapping;            external 'I7000.DLL' name 'SetupLinearMapping';
function EnableLinearMapping;           external 'I7000.DLL' name 'EnableLinearMapping';
function DisableLinearMapping;          external 'I7000.DLL' name 'DisableLinearMapping';
function ReadLinearMappingStatus;       external 'I7000.DLL' name 'ReadLinearMappingStatus';
function DigitalOut_7016;               external 'I7000.DLL' name 'DigitalOut_7016';

function DigitalBitOut;                 external 'I7000.DLL' name 'DigitalBitOut';
function ReadPowerOnValueForDo;         external 'I7000.DLL' name 'ReadPowerOnValueForDo';
function ReadSafeValueForDo;            external 'I7000.DLL' name 'ReadSafeValueForDo';
function DigitalInCounterRead;          external 'I7000.DLL' name 'DigitalInCounterRead';
function ClearDigitalInCounter;         external 'I7000.DLL' name 'ClearDigitalInCounter';
function ReadSourceValueOfLM;           external 'I7000.DLL' name 'ReadSourceValueOfLM';
function ReadTargetValueOfLM;           external 'I7000.DLL' name 'ReadTargetValueOfLM';
// WatchDog
function HostIsOK;       	        external 'I7000.DLL' name 'HostIsOK';
function ReadModuleResetStatus;         external 'I7000.DLL' name 'ReadModuleResetStatus';
function ToSetupHostWatchdog;           external 'I7000.DLL' name 'ToSetupHostWatchdog';
function ToReadHostWatchdog;            external 'I7000.DLL' name 'ToReadHostWatchdog';
function ReadModuleHostWatchdogStatus;  external 'I7000.DLL' name 'ReadModuleHostWatchdogStatus';
function ResetModuleHostWatchdogStatus; external 'I7000.DLL' name 'ResetModuleHostWatchdogStatus';
function SetSafeValueForDo;             external 'I7000.DLL' name 'SetSafeValueForDo';
function SetPowerOnValueForDo;          external 'I7000.DLL' name 'SetPowerOnValueForDo';
function SetSafeValueForAo;             external 'I7000.DLL' name 'SetSafeValueForAo';
function SetPowerOnValueForAo;          external 'I7000.DLL' name 'SetPowerOnValueForAo';
function SetPowerOnSafeValue;           external 'I7000.DLL' name 'SetPowerOnSafeValue';
function ReadSafeValueForAo;            external 'I7000.dll' name 'ReadSafeValueForAo';
function ReadPowerOnValueForAo;         external 'i7000.dll' name 'ReadPowerOnValueForAo';
function DigitalInLatch;                external 'i7000.dll' name 'DigitalInLatch';
end.

