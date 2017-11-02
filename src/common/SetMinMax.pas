unit SetMinMax;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  StdCtrls, Buttons,chart, das_Const;

type
  TSetMinMaxForm = class(TForm)
    Label1: TLabel;
    Label2: TLabel;
    UpperLimit: TEdit;
    OkBtn: Tspeedbutton;
    BitBtn2: Tspeedbutton;
    LowerLimit: TEdit;
    procedure OkBtnClick(Sender: TObject);
    procedure UpperLimitChange(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure BitBtn2Click(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
  private
    { Private declarations }
  public
    chart    :TChart;
    Function SetLimits(sender:TChart):integer;
    { Public declarations }
  end;

var
  SetMinMaxForm: TSetMinMaxForm;

implementation

uses main;

{$R *.DFM}

{ TForm1 }

Function TSetMinMaxForm.SetLimits;
begin
    UpperLimit.Text:=Format('%.4f',[sender.LeftAxis.Maximum]);
    LowerLimit.Text:=Format('%.4f',[sender.LeftAxis.minimum]);
  Chart:=sender;
  OkBTn.enabled:=true;
  Top:=Chart.Top + (Chart.Height div 2) +MainForm.top;
  Left:=Chart.left + (Chart.Width div 2) +MainForm.left;
  self.BringToFront;
  result:=showmodal;
end;
procedure TSetMinMaxForm.OkBtnClick(Sender: TObject);
Var
 OldDelimiter   : char;
 i1             : Integer;
begin
 Olddelimiter:=DecimalSeparator;
 DecimalSeparator:='.';
 UpperLimit.Text:=ChangeChar(UpperLimit.Text,',','.');
 LowerLimit.Text:=ChangeChar(LowerLimit.Text,',','.');
 chart.LeftAxis.SetMinMax(StrToFloat(LowerLimit.Text),StrToFloat(UpperLimit.Text));
 DecimalSeparator:=Olddelimiter;
 chart.LeftAxis.Automatic:=false;
 chart.LeftAxis.AutomaticMaximum := False;
 chart.LeftAxis.AutomaticMinimum := False;
 ModalResult:=mrOK;

end;

procedure TSetMinMaxForm.UpperLimitChange(Sender: TObject);
var
  Hi,Lo          :double;
  Res1,res2      :Integer;
  OldSeparator   :char;
  i1             :Integer;
begin
 OldSeparator:=DecimalSeparator;
 DecimalSeparator:='.';
 UpperLimit.Text:=ChangeChar(UpperLimit.Text,',','.');
 LowerLimit.Text:=ChangeChar(LowerLimit.Text,',','.');
 Val(LowerLimit.Text,Lo,res1);
 Val(UpperLimit.Text,Hi,res2);
 DecimalSeparator:=OldSeparator;
 OkBtn.Enabled:=(res1=0) and  (res2=0) and (Hi>Lo);
end;
procedure TSetMinMaxForm.FormClose(Sender: TObject;
  var Action: TCloseAction);
begin
  chart.CancelMouse:=true;
end;

procedure TSetMinMaxForm.BitBtn2Click(Sender: TObject);
begin
 modalresult:=mrcancel;
 close;
end;

procedure TSetMinMaxForm.FormKeyPress(Sender: TObject; var Key: Char);
begin
 if key=#13 then if okbtn.Enabled then okbtn.Click; 
end;

end.
