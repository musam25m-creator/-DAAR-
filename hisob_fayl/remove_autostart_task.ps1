$ErrorActionPreference = "Stop"

$taskName = "DAAR_Hisob_Server"

try {
  Stop-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
} catch {
}

Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue
Write-Output "Task o'chirildi (agar mavjud bo'lsa): $taskName"
