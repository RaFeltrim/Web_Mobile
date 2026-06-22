param(
    [string]$RepoPath = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Invoke-GitReadOnly {
    param(
        [Parameter(Mandatory = $true)]
        [string[]]$Arguments
    )

    & git -C $RepoPath @Arguments
}

Write-Host "Branch cleanup dry-run for: $RepoPath"
Write-Host "No branches will be deleted. No refs will be pruned. No Git config will be changed."
Write-Host ""

Write-Host "== Current worktree =="
Invoke-GitReadOnly -Arguments @("status", "--short", "--branch", "-uall")
Write-Host ""

Write-Host "== Local and tracked remote branches =="
Invoke-GitReadOnly -Arguments @("branch", "--list", "--all", "--verbose", "--verbose", "--no-color")
Write-Host ""

Write-Host "== Worktrees =="
Invoke-GitReadOnly -Arguments @("worktree", "list", "--porcelain")
Write-Host ""

Write-Host "== Remote HEAD and published branches =="
Invoke-GitReadOnly -Arguments @("ls-remote", "--symref", "origin", "HEAD")
Invoke-GitReadOnly -Arguments @("ls-remote", "--heads", "origin")
Write-Host ""

Write-Host "== Merged/no-merged view against local main =="
Invoke-GitReadOnly -Arguments @("branch", "--all", "--merged", "main", "--no-color")
Invoke-GitReadOnly -Arguments @("branch", "--all", "--no-merged", "main", "--no-color")
Write-Host ""

$candidateLocalDeletes = @(
    "feat/T-ACV-003-browser-geolocation",
    "feat/T-NOT-002-news-origin"
)

$candidateRemoteDeletes = @(
    "feature/T-BASE-001-setup-inicial",
    "task/T-BASE-001",
    "task/T-BASE-004",
    "copilot/t-base-004-review-approval",
    "copilot/task-t-base-001",
    "feat/T-NOT-002-news-origin"
)

$reviewFirst = @(
    "codex/figma-web-handoff"
)

Write-Host "== Dry-run only: candidate local cleanup commands =="
foreach ($branch in $candidateLocalDeletes) {
    Write-Host "DRY-RUN: git branch -d $branch"
}
Write-Host ""

Write-Host "== Dry-run only: candidate remote cleanup commands =="
foreach ($branch in $candidateRemoteDeletes) {
    Write-Host "DRY-RUN: git push origin --delete $branch"
}
Write-Host ""

Write-Host "== Review before any cleanup =="
foreach ($branch in $reviewFirst) {
    Write-Host "REVIEW: inspect commits/diff for $branch before archiving or deleting"
}
Write-Host ""

Write-Host "Approval required before running any real delete command."

