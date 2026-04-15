$ErrorActionPreference = "Stop"

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$sourceVbs = Join-Path $projectDir "run_server_background.vbs"
if (-not (Test-Path -LiteralPath $sourceVbs)) {
  throw "run_server_background.vbs topilmadi: $sourceVbs"
}

$startupDir = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Startup"
$targetVbs = Join-Path $startupDir "DAAR_Hisob_Server.vbs"

Copy-Item -LiteralPath $sourceVbs -Destination $targetVbs -Force
Write-Output "Startup ga qo'shildi: $targetVbs"
