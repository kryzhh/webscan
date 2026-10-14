# Define paths relative to this script
$projectPath = Join-Path $PSScriptRoot "WebScan"
$venvPython = Join-Path $projectPath ".env\bin\python"
$flaskPath = Join-Path $projectPath "scripts\FlaskServer"
$reactPath = Join-Path $flaskPath "ReactApp"

# Verify paths
if (-not (Test-Path $venvPython)) {
    Write-Error "Python executable not found: $venvPython"
    exit 1
}

if (-not (Test-Path (Join-Path $flaskPath "api.py"))) {
    Write-Error "api.py not found in $flaskPath"
    exit 1
}

if (-not (Test-Path $reactPath)) {
    Write-Error "ReactApp directory not found: $reactPath"
    exit 1
}

# Launch Flask API
Start-Process powershell.exe -ArgumentList @(
    "-NoExit",
    "-Command",
    "Set-Location '$flaskPath'; & python api.py"
)

# Launch React development server
Start-Process powershell.exe -ArgumentList @(
    "-NoExit",
    "-Command",
    "Set-Location '$reactPath'; npm run dev"
)

Write-Output "Python API and React dev server launched."