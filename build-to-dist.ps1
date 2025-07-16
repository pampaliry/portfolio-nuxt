# build-to-dist.ps1

Write-Host "=== Starting Nuxt build ==="
npm run build

# Zapamätaj si názov aktuálnej vetvy
$currentBranch = git rev-parse --abbrev-ref HEAD

Write-Host "=== Saving changes and switching to 'dist' branch ==="
git stash push -u
git checkout dist

Write-Host "=== Removing old files from dist branch ==="
Get-ChildItem -Exclude .git | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "=== Preparing Git index ==="
git rm -r --cached . | Out-Null
git add -f .output

$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
Write-Host "=== Committing and pushing build from $timestamp ==="
git commit -m "Deploy: .output only ($timestamp)" | Out-Null
git push origin dist --force

Write-Host "=== Returning to original branch '$currentBranch' ==="
git checkout $currentBranch
git stash pop | Out-Null

Write-Host "=== Done. New .output has been deployed to 'dist' branch ==="
