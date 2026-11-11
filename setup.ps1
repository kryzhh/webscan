$ErrorActionPreference = "Stop"

$Root = $PSScriptRoot
$WebScan = Join-Path $Root "WebScan"
$Scripts = Join-Path $WebScan "scripts"
$FlaskServer = Join-Path $Scripts "FlaskServer"
$ReactApp = Join-Path $FlaskServer "ReactApp"
$Python = Join-Path $WebScan ".env\Scripts\python.exe"

Write-Output "Checking virtual environment..."

if (!(Test-Path $Python)) {
    python -m venv (Join-Path $WebScan ".env")
}

Write-Output "Installing Python dependencies..."
& $Python -m pip install -r (Join-Path $Scripts "requirements.txt")

if ($LASTEXITCODE -ne 0) {
    throw "Python dependency installation failed."
}

Write-Output "Installing React dependencies..."
Push-Location $ReactApp
try {
    npm install
    if ($LASTEXITCODE -ne 0) {
        throw "npm install failed."
    }
}
finally {
    Pop-Location
}

Write-Output "Running setup.py..."
Push-Location $Scripts
try {
    & $Python ".\setup.py"
    if ($LASTEXITCODE -ne 0) {
        throw "setup.py failed."
    }
}
finally {
    Pop-Location
}

Write-Output "Setup completed successfully! Reopen the terminal and run .\app.ps1"