unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  HTTPSend, StdCtrls, ExtCtrls;

type
  TForm1 = class(TForm)
    Panel3: TPanel;
    Panel7: TPanel;
    Memo3: TMemo;
    Memo4: TMemo;
    Panel8: TPanel;
    Label14: TLabel;
    Label15: TLabel;
    Edit10: TEdit;
    Button4: TButton;
    Panel9: TPanel;
    Memo5: TMemo;
    Memo6: TMemo;
    Panel10: TPanel;
    Label16: TLabel;
    Label17: TLabel;
    Edit11: TEdit;
    Button5: TButton;
    Panel11: TPanel;
    Memo7: TMemo;
    Memo8: TMemo;
    Panel12: TPanel;
    Label18: TLabel;
    Label19: TLabel;
    Edit12: TEdit;
    Button6: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button6Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.DFM}

function ProxyHttpPostURL(const URL, URLData: string; const Data: TStream): Boolean;
var
  HTTP: THTTPSend;
begin
  HTTP := THTTPSend.Create;
  try
    HTTP.Document.Write(Pointer(URLData)^, Length(URLData));
    HTTP.MimeType := 'application/x-www-form-urlencoded';
    Result := HTTP.HTTPMethod('POST', URL);
    Data.CopyFrom(HTTP.Document, 0);
  finally
    HTTP.Free;
  end;
end;

function ProxyHttpPostFile(const URL, FieldName, FileName: string;
  const Data: TStream; const ResultData: TStrings): Boolean;
const
  CRLF = #$0D + #$0A;
var
  HTTP: THTTPSend;
  Bound, s: string;
begin
  Bound := IntToHex(Random(MaxInt), 8) + '_Synapse_boundary';
  HTTP := THTTPSend.Create;
  try
    s := '--' + Bound + CRLF;
    s := s + 'content-disposition: form-data; name="' + FieldName + '";';
    s := s + ' filename="' + FileName +'"' + CRLF;
    s := s + 'Content-Type: Application/octet-string' + CRLF + CRLF;
    HTTP.Document.Write(Pointer(s)^, Length(s));
    HTTP.Document.CopyFrom(Data, 0);
    s := CRLF + '--' + Bound + '--' + CRLF;
    HTTP.Document.Write(Pointer(s)^, Length(s));
    HTTP.MimeType := 'multipart/form-data, boundary=' + Bound;
    Result := HTTP.HTTPMethod('POST', URL);
    ResultData.LoadFromStream(HTTP.Document);
  finally
    HTTP.Free;
  end;
end;


procedure TForm1.Button1Click(Sender: TObject);
var
  HTTP: THTTPSend;
begin
  HTTP := THTTPSend.Create;
  try
//    HTTP.ProxyHost := Edit8.Text;
//    HTTP.ProxyPort := Edit9.Text;
    HTTP.HTTPMethod('GET', Edit11.text);
    Memo6.Lines.Assign(HTTP.Headers);
    Memo5.Lines.LoadFromStream(HTTP.Document);
  finally
    HTTP.Free;
  end;
end;

procedure TForm1.Button2Click(Sender: TObject);
var
  st: TMemoryStream;
begin
end;

procedure TForm1.Button3Click(Sender: TObject);
var
  st: TFileStream;
begin
end;

procedure TForm1.Button6Click(Sender: TObject);
var
  HTTP: THTTPSend;
begin
  HTTP := THTTPSend.Create;
  try
//    HTTP.ProxyHost := Edit8.Text;
//    HTTP.ProxyPort := Edit9.Text;
    HTTP.HTTPMethod('GET', Edit12.text);
    Memo8.Lines.Assign(HTTP.Headers);
    Memo7.Lines.LoadFromStream(HTTP.Document);
  finally
    HTTP.Free;
  end;
end;

procedure TForm1.Button4Click(Sender: TObject);
var
  HTTP: THTTPSend;
begin
  HTTP := THTTPSend.Create;
  try
//    HTTP.ProxyHost := Edit8.Text;
//    HTTP.ProxyPort := Edit9.Text;
    HTTP.HTTPMethod('GET', Edit10.text);
    Memo4.Lines.Assign(HTTP.Headers);
    Memo3.Lines.LoadFromStream(HTTP.Document);
  finally
    HTTP.Free;
  end;
end;

end.
