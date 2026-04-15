$ErrorActionPreference = "Stop"

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectDir

$env:AUTO_OPEN_BROWSER = "0"
$env:APP_HOST = "0.0.0.0"
$env:APP_PORT = "8000"

$sitePath = Join-Path $projectDir "site.py"
if (-not (Test-Path -LiteralPath $sitePath)) {
  throw "site.py topilmadi: $sitePath"
}

function Get-PythonCommand {
  $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
  if ($pythonCmd) {
    return @{ Kind = "python"; Cmd = $pythonCmd.Source }
  }

  $pyCmd = Get-Command py -ErrorAction SilentlyContinue
  if ($pyCmd) {
    return @{ Kind = "py"; Cmd = $pyCmd.Source }
  }

  throw "Python topilmadi. Python yoki py launcher o'rnatilgan bo'lishi kerak."
}

function Test-PortBusy([int]$Port) {
  try {
    $conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop
    return $null -ne $conn
  } catch {
    return $false
  }
}

$python = Get-PythonCommand

while ($true) {
  if (Test-PortBusy -Port ([int]$env:APP_PORT)) {
    Start-Sleep -Seconds 5
    continue
  }

  try {
    if ($python.Kind -eq "py") {
      & $python.Cmd -3 $sitePath
    } else {
      & $python.Cmd $sitePath
    }
  } catch {
    Start-Sleep -Seconds 5
  }
  Start-Sleep -Seconds 2
}
