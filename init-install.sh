#!/bin/bash

# Verificar si ya se ejecutó el script
if [ -e ".initialized" ]; then
  echo "El script ya se ha ejecutado previamente. No se realizarán instalaciones adicionales."
  exit 0
fi

# Crear un marcador para indicar que el script se ha ejecutado
touch .initialized

# Instalar dependencias globales
npm install

# Instalar dependencias del backend
cd api
npm install

# Comprobar si la instalación del backend fue exitosa
if [ $? -ne 0 ]; then
  echo "Error al instalar dependencias del backend. Saliendo..."
  exit 1
fi


# Volver al directorio principal
cd ..

# Instalar dependencias del frontend
cd app
npm install

# Volver al directorio principal
cd ..
