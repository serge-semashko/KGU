unit DCON_PC;

interface
uses
  SysUtils, StdCtrls;


//type PChar=^Char;
type PSingle=^Single;
type PWord=^Word;
type PDWord=^LongInt;


Function  IGetErrorString(wErrCode : Word ): String;



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
function Send_Binary(cPort:char; szCmd:Pchar; iLen:Word ):Word; stdCall
function Receive_Binary(cPort:char; szResult:Pchar; wTimeOut:Word; wLen:Word; wT:Word):Word stdCall;


function DCON_Write_DO(cComPort:Char;iAddress:Word; iSlot:ShortInt; iDO_TotalCh:Word;
						lDO_Value:LongInt; iCheckSum:Word; iTimeOut:Word): Word; StdCall;
{****************************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iDO_TotalCh: 1~32. total DO channels        
    lDO_Value: DO value. 
                for example: 0x32==> ch5=1, ch4=1, ch1=1, 
                                     others are 0.  
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
              
    return: 0 = No Error
            other = error code.                                     
****************************************************************************}

function DCON_Write_DO_Bit(cComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
							iDO_TotalCh:Word; iBitValue:Word; iCheckSum:Word; iTimeOut:Word): Word; StdCall;
{***********************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)0
    iChannel: 0~31
    iDO_TotalCh: 1~32, Total DO channels
    iBitValue: 0   = Off
               <>0 = On        
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
              
    return: 0 = No Error
            other = error code.                                     
*************************************************************************}

function DCON_Read_DI_Counter(cComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
							  iDI_TotalCh:Word; iCheckSum:Word; iTimeOut:Word;
							  lCounter_Value:PDWord): Word; StdCall;
{*******************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iChannel: 0~15        
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    *lCounter_Value: counter value.
              
    return: 0 = No Error
            other = error code. 
**********************************************************************}

function DCON_Clear_DI_Counter(cComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
							  iDI_TotalCh:Word; iCheckSum:Word; iTimeOut:Word): Word; StdCall;
{******************************************************************
iComPort: 1 ~ 255
iAddress: 0 ~ 255: the RS-485 Address of module 
iSlot: 0~7: for 8K and 87K series on i-8000 system 
        -1: 7K and 87K (on 87K IO Expansion bus)
iChannel: 0~15 
iDI_TotalCh: 1~32. total DI channels
iCheckSum: 0: disabled 
           1: enabled
iTimeOut: timeout value to wait response. unit= ms.
          
return: 0 = No Error
        other = error code. 
******************************************************************}

function DCON_Write_AO(cComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
				    iAO_TotalCh:Word; fValue:Single;iCheckSum:Word; iTimeOut:Word): Word; StdCall;
{***************************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iChannel: 0~3
    iAO_TotalCh: 1~4. total AO channels
    fValue: AO value
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
              
    return: 0 = No Error
            other = error code.  
*****************************************************************************}

function DCON_Read_AO(cComPort:Char; iAddress:Word; iSlot:ShortInt;
						 iChannel:ShortInt; iAO_TotalCh:Word; iCheckSum:Word;
						 iTimeOut:Word;  fValue:PSingle): Word; StdCall;
{***********************************************************************************
   iComPort: 1 ~ 255
   iAddress: 0 ~ 255: the RS-485 Address of module 
   iSlot: 0~7: for 8K and 87K series on i-8000 system 
           -1: 7K and 87K (on 87K IO Expansion bus)
   iAO_TotalCh: 1~4. total AO channels,used to define command and response 
   
   iCheckSum: 0: disabled 
              1: enabled
   iTimeOut: timeout value to wait response. unit= ms.
    
   iDataFormat: 0: Engineering format
                 1: Percent format
                 2: Hex format
                     
   iValue: Hex format 
   fValue: float format   
    
   return: 0 = No Error
           15= timeout (No response)     


    Note: user can readback AO output in either float value or hex format ,
          according to the data format of module.
          but user must declare both the variable in function 
    for example:
    float fVal;
    int iVal,format;
    short ret;
    ....
    format=0;
    fVal=5.0;
    iVal=0;
    ret= DCON_Read_AO(1,1,-1,0,4,0,300,format,&fVal,&iVal);
        
    //then the current AO value will be fVal, the iVal will get the default 0    
**********************************************************************************}

function DCON_Read_AI(cComPort:Char;iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
						 iAI_TotalCh:Word; iCheckSum:Word; iTimeOut:Word; iDataFormat:Word;
						 fValue:PSingle;  iValue:PWord): Word; StdCall;
{*****************************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: for 7K and 87K (on 87K IO Expansion bus)
    iChannel: 0~7
    iAI_TotalCh: 1~ N; total AI channels
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    
    *fValue:the AI value (engineering ; % or ohmn data type).
    
    return: 0 = No Error
            other = error code.
******************************************************************************}

function DCON_Read_Counter(cComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
					  iCheckSum:Word; iTimeOut:Word; lCounter_Value:PDWord): Word; StdCall;
{*********************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iChannel: 0~15        
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    *lCounter_Value: counter value.
              
    return: 0 = No Error
            other = error code. 
***********************************************************************}

function DCON_Clear_Counter(iComPort:Char; iAddress:Word; iSlot:ShortInt; iChannel:ShortInt;
										 iCheckSum:Word; iTimeout:Word): Word; StdCall;
{*********************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iChannel: 0~15        
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
              
    return: 0 = No Error
            other = error code. 
***********************************************************************}

function DCON_Read_DIO(cComPort:Char; iAddress:Word; iSlot:ShortInt;
								 iDI_TotalCh:Word; iDO_TotalCh:Word; iCheckSum:Word; iTimeOut:Word;
								 lDI_Value:PDWord; lDO_Value:PDWord; cDI_BitValue:PChar;
								 cDO_BitValue:PChar): Word; StdCall;
{*********************************************************************************
   iComPort: 1 ~ 255
   iAddress: 0 ~ 255: the RS-485 Address of module 
   iSlot: 0~7: for 8K and 87K series on i-8000 system
           -1: 7K and 87K (on 87K IO Expansion bus)
   iDI_TotalCh: 0~32. total DI channels;used to define the input bytes 
   iDO_TotalCh: 0~32. total DO channels;used to define the output bytes
   iCheckSum: 0: disabled 
              1: enabled
   iTimeOut: timeout value to wait response. unit= ms.
   *lDI_Value: DI value. 
               for example: 0x32==> ch5=1; ch4=1; ch1=1; 
                                    others are 0.       
   *lDO_Value: DO read back value.
               for example: 0x32==> ch5=on; ch4=on; ch1=on; 
                                    others are off.                                      
   *cDI_BitValue: DI value.
                  for example: 0;1;0;0;1;1
                  ==> bit0=0;bit1=1;bit2=0;bit3=0;bit4=1;bit5=1.
   *cDO_BitValue: DO read back value.
                  for example: 0;1;0;0;1;1
                  ==> bit0=0;bit1=1;bit2=0;bit3=0;bit4=1;bit5=1.
    
    return: 0 = No Error
            15= timeout (No response)  
**********************************************************************************}

function DCON_READ_DIO_Latch( cComPort:Char;iAddress:Word; iSlot:ShortInt;
							 iDI_TotalCh:Word; iDO_TotalCh:Word; iLatchType:Word;
							 iCheckSum:Word; iTimeOut:Word; lDI_Latch_Value:PDWord;
							 lDO_Latch_Value:PDWord; cDI_Latch_BitValue:PChar;
							 cDO_Latch_BitValue:PChar): Word; StdCall;
{***************************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)
    iDI_TotalCh: 0~32. total DI channels;used to define input bytes
    iDO_TotalCh: 0~32. total DO channels;used to define the output bytes       
    iLatchType: 0 = Logic Low Latched
                1 = Logic High Latched
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    *lDI_Latch_Value: DI latch value. 
                for example: 0x32==> ch5=1; ch4=1; ch1=1; 
                                     others are 0.       
    *lDO_Latch_Value: DO read back latch value.
                for example: 0x32==> ch5=on; ch4=on; ch1=on; 
                                     others are off.                                      
    *cDI_Latch_BitValue: DI latch value.
                   for example: 0;1;0;0;1;1
                   ==> bit0=0;bit1=1;bit2=0;bit3=0;bit4=1;bit5=1.
    *cDO_Latch_BitValue: DO read back latch value.
                   for example: 0;1;0;0;1;1
                   ==> bit0=0;bit1=1;bit2=0;bit3=0;bit4=1;bit5=1.                                                    
                   
    return: 0 = No Error
            15= timeout (No response)      
****************************************************************************}

function DCON_Clear_DIO_Latch( cComPort:Char; iAddress:Word; iSlot:ShortInt;
							    iCheckSum:Word; iTimeOut:Word): Word; StdCall;
{*******************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)       
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    
              
    return: 0 = No Error
            15= timeout (No response)  
			

**********************************************************************}

function DCON_Read_Overflow( cComPort:Char; iAddress:Word; iSlot:ShortInt;
         iChannel:ShortInt; iCheckSum:Word; iTimeOut:Word;
          iOverflow:PWord): Word; StdCall;
{*******************************************************************
    iComPort: 1 ~ 255
    iAddress: 0 ~ 255: the RS-485 Address of module 
    iSlot: 0~7: for 8K and 87K series on i-8000 system 
            -1: 7K and 87K (on 87K IO Expansion bus)       
    iCheckSum: 0: disabled 
               1: enabled
    iTimeOut: timeout value to wait response. unit= ms.
    
              
    return: 0 = No Error
            15= timeout (No response)  
			

**********************************************************************}

function DCON_Get_Lib_Version(): Word; StdCall;
{*********************************************************
User use this function to read the version of lib.
*********************************************************}




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


function DCON_Write_DO;					external 'DCON_PC.DLL'  name 'DCON_Write_DO'
function DCON_Write_DO_Bit;             external 'DCON_PC.DLL'  name 'DCON_Write_DO_Bit'
function DCON_Read_DI_Counter ;         external 'DCON_PC.DLL'  name 'DCON_Read_DI_Counter'
function DCON_Clear_DI_Counter ;        external 'DCON_PC.DLL'  name 'DCON_Clear_DI_Counter'
function DCON_Write_AO ;                external 'DCON_PC.DLL'  name 'DCON_Write_AO'
function DCON_Read_AO ;                 external 'DCON_PC.DLL'  name 'DCON_Read_AO'
function DCON_Read_AI  ;                external 'DCON_PC.DLL'  name 'DCON_Read_AI'
function DCON_Read_Counter ;            external 'DCON_PC.DLL'  name 'DCON_Read_Counter'
function DCON_Clear_Counter ;           external 'DCON_PC.DLL'  name 'DCON_Clear_Counter'
function DCON_Read_DIO  ;               external 'DCON_PC.DLL'  name 'DCON_Read_DIO'
function DCON_READ_DIO_Latch ;          external 'DCON_PC.DLL'  name 'DCON_READ_DIO_Latch'
function DCON_Clear_DIO_Latch  ;        external 'DCON_PC.DLL'  name 'DCON_Clear_DIO_Latch'
function DCON_Read_Overflow  ;          external 'DCON_PC.DLL'  name 'DCON_Read_Overflow'
function DCON_Get_Lib_Version ;         external 'DCON_PC.DLL'  name 'DCON_Get_Lib_Version'



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
end.
