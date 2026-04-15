$ErrorActionPreference = "Stop"

$startupDir = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Startup"
$targetVbs = Join-Path $startupDir "DAAR_Hisob_Server.vbs"

if (Test-Path -LiteralPath $targetVbs) {
  Remove-Item -LiteralPath $targetVbs -Force
  Write-Output "Startup dan o'chirildi: $targetVbs"
} else {
  Write-Output "Startup fayl topilmadi: $targetVbs"
}
