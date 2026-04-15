$ErrorActionPreference = "Stop"

$taskName = "DAAR_Hisob_Server"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$vbsPath = Join-Path $projectDir "run_server_background.vbs"

if (-not (Test-Path -LiteralPath $vbsPath)) {
  throw "run_server_background.vbs topilmadi: $vbsPath"
}

$action = New-ScheduledTaskAction -Execute "wscript.exe" -Argument "`"$vbsPath`""
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -RestartCount 999 `
  -RestartInterval (New-TimeSpan -Minutes 1) `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew

Register-ScheduledTask `
  -TaskName $taskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Description "DAAR hisob serverini login paytida avtomatik ishga tushiradi" `
  -Force | Out-Null

Start-ScheduledTask -TaskName $taskName
Write-Output "Task o'rnatildi va ishga tushirildi: $taskName"
