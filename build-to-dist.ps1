# build-to-dist.ps1
Write-Host "=== Starting Nuxt build ==="
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Build failed. Exiting..."
  exit 1
}

Write-Host "=== Committing .output to main ==="
git add .
git add .\.output
git add -f  .\.output\server\node_modules
git commit -m "Build commit"
git push origin main

Write-Host "=== Switching to dist branch ==="
git checkout dist

Write-Host "=== Copying .output from main ==="
git checkout main -- .output

Write-Host "=== Committing and pushing to dist ==="
git add -f .output
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy from latest main ($timestamp)"
git push origin dist

Write-Host "=== Switching back to main ==="
git checkout main

Write-Host "=== Git status ==="
git status
