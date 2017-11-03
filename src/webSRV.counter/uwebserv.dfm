object HTTPSRVForm: THTTPSRVForm
  Left = 309
  Top = 37
  Width = 1209
  Height = 920
  Caption = 'WEB srv'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -10
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 1193
    Height = 80
    Align = alTop
    TabOrder = 0
    object SpeedButton1: TSpeedButton
      Left = 13
      Top = 13
      Width = 27
      Height = 27
      Glyph.Data = {
        76010000424D7601000000000000760000002800000020000000100000000100
        04000000000000010000120B0000120B00001000000000000000000000000000
        800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
        FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF003FFFFFFFFFFF
        FFFF33333333333FFFFF3FFFFFFFFF00000F333333333377777F33FFFFFFFF09
        990F33333333337F337F333FFFFFFF09990F33333333337F337F3333FFFFFF09
        990F33333333337FFF7F33333FFFFF00000F3333333333777773333333FFFFFF
        FFFF3FFFFF3333333F330000033FFFFF0FFF77777F3333337FF30EEE0333FFF0
        00FF7F337FFF333777FF0EEE00033F00000F7F33777F3777777F0EEE0E033000
        00007FFF7F7FF777777700000E00033000FF777773777F3777F3330EEE0E0330
        00FF337FFF7F7F3777F33300000E033000FF337777737F37773333330EEE0300
        03FF33337FFF77777333333300000333333F3333777773333333}
      NumGlyphs = 2
      OnClick = SpeedButton1Click
    end
    object URLED: TEdit
      Left = 7
      Top = 52
      Width = 507
      Height = 24
      TabOrder = 0
      Text = 'http://nucloweb.jinr.ru/kgu/Cache/get_data.php?callback=?'
    end
    object kgu1stdtxt: TStaticText
      Left = 531
      Top = 26
      Width = 204
      Height = 23
      AutoSize = False
      BevelKind = bkSoft
      BorderStyle = sbsSunken
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clBlack
      Font.Height = -15
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
      TabOrder = 1
    end
    object kgu1freqtxt: TStaticText
      Left = 531
      Top = 50
      Width = 203
      Height = 23
      AutoSize = False
      BevelKind = bkSoft
      BorderStyle = sbsSunken
      Caption = 'kgu1freqtxt'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clBlack
      Font.Height = -15
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
      TabOrder = 2
    end
    object kgu2stdtxt: TStaticText
      Left = 740
      Top = 26
      Width = 203
      Height = 23
      AutoSize = False
      BevelKind = bkSoft
      BorderStyle = sbsSunken
      Caption = 'kgu2freqtxt'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clBlack
      Font.Height = -15
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
      TabOrder = 3
    end
    object kgu2freqtxt: TStaticText
      Left = 739
      Top = 50
      Width = 204
      Height = 23
      AutoSize = False
      BevelKind = bkSoft
      BorderStyle = sbsSunken
      Caption = 'kgu2freqtxt'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clBlack
      Font.Height = -15
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
      TabOrder = 4
    end
  end
  object Memo2: TMemo
    Left = 0
    Top = 80
    Width = 1193
    Height = 286
    Align = alTop
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -15
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
    TabOrder = 1
  end
  object Memobody: TMemo
    Left = 0
    Top = 366
    Width = 1193
    Height = 516
    Align = alClient
    Lines.Strings = (
      'Memobody')
    TabOrder = 2
  end
  object Timer1: TTimer
    Enabled = False
    Interval = 800
    OnTimer = SpeedButton1Click
    Left = 368
    Top = 128
  end
  object ApplicationEvents1: TApplicationEvents
    OnMinimize = ApplicationEvents1Minimize
    Left = 352
    Top = 16
  end
  object PopupMenu1: TPopupMenu
    Left = 656
    Top = 24
    object Restore1: TMenuItem
      Caption = 'Restore'
      OnClick = Restore1Click
    end
    object Minimize1: TMenuItem
      Caption = 'Minimize'
      OnClick = Minimize1Click
    end
    object quit1: TMenuItem
      Caption = 'quit'
      OnClick = quit1Click
    end
    object Restart1: TMenuItem
      Caption = 'Restart'
      OnClick = Restart1Click
    end
  end
end
