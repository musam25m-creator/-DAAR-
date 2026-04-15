Set WshShell = CreateObject("WScript.Shell")
cmd = "powershell -NoProfile -ExecutionPolicy Bypass -File """ & Replace(WScript.ScriptFullName, "run_server_background.vbs", "start_server_background.ps1") & """"
WshShell.Run cmd, 0, False
