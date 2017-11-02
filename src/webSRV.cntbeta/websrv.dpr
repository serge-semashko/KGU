program websrv;

uses
  Forms,
  uwebserv in 'uwebserv.pas' {HTTPSRVForm},
  uLkJSON in 'UlkJSON.pas',
  DAS_Const in 'DAS_Const.pas',
  DCON_PC in 'dcon_pc.pas',
  I7000 in 'I7000.pas',
  I7000u in 'i7000u.pas';

{$R *.res}

begin
//ddddd
  Application.Initialize;
  Application.CreateForm(THTTPSRVForm, HTTPSRVForm);
  Application.Run;
end.
