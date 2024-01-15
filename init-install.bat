@echo off

REM Verificar si ya se ejecutó el script
if exist .\initialized (
  echo El script ya se ha ejecutado previamente. No se realizarán instalaciones adicionales.
  exit /b 0
)

REM Crear un marcador para indicar que el script se ha ejecutado
echo. > .\initialized

REM Instalar dependencias globales
npm install -g npm-run-all

REM Volver al directorio principal
cd ..

REM Instalar dependencias del backend
cd api
npm install
if %errorlevel% neq 0 (
  echo Error al instalar dependencias del backend. Saliendo...
  exit /b 1
)

REM Volver al directorio principal
cd ..

REM Instalar dependencias del frontend
cd app
npm install
cd ..
