rem start d:\last\websrv\websrv.exe
rem @ping localhost >nul
start "chrome" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -kiosk http://10.0.10.103/kgu
rem Блокировка рабочей станции
rem %SystemRoot%\system32\rundll32.exe USER32.DLL LockWorkStation 

