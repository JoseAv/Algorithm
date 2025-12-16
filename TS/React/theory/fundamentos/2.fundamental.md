# Fundamentos

## TS vs TSX

- TS: extencion para indicar archivos que son typeScript
- TSX: extencio para indicar arhivos que retornan un jsx

No hay una diferencia ya que ambos compilan a js pero si ayuda a identificar que hace el archivo o de que tipo es.

## Archivo tsconfig.json

Este es un archivo que define las reglas de como se va a manejar Ts y como va a compilar

Ejemplo:

``` js
{
  "compilerOptions": {
    // Versión de JavaScript a la que se compilará tu código
    // Opciones comunes: ES5, ES6/ES2015, ES2017, ES2020, ESNext
    "target": "ES2017",
    
    // Librerías de tipos que TypeScript incluirá
    // dom = APIs del navegador, esnext = características modernas de JS
    "lib": ["dom", "dom.iterable", "esnext"],
    
    // Permite usar archivos .js en tu proyecto TypeScript
    // true o false
    "allowJs": true,
    
    // Salta la verificación de tipos en archivos .d.ts (para compilar más rápido)
    // true o false
    "skipLibCheck": true,
    
    // Activa TODAS las verificaciones estrictas de tipos
    // true o false - recomendado: true
    "strict": true, 
    
    // No genera archivos .js de salida (útil cuando usas bundlers como Next.js)
    // true o false
    "noEmit": true,
    
    // Permite importar módulos CommonJS como si fueran ES6
    // Ejemplo: import React from 'react' en vez de import * as React
    // true o false
    "esModuleInterop": true,
    
    // Sistema de módulos a usar
    // Opciones: commonjs, esnext, es6, umd, amd
    "module": "esnext",
    
    // Cómo resolver las rutas de imports
    // Opciones: node, classic, bundler, node16, nodenext
    "moduleResolution": "bundler",
    
    // Permite importar archivos .json
    // true o false
    "resolveJsonModule": true,
    
    // Cada archivo se trata como módulo separado (requerido para algunos bundlers)
    // true o false
    "isolatedModules": true,
    
    // Cómo transformar JSX
    // Opciones: react (React.createElement), react-jsx (automático), preserve
    "jsx": "react-jsx",
    
    // Guarda info de compilaciones previas para compilar más rápido
    // true o false
    "incremental": true,
    
    // Plugins adicionales (en este caso, el de Next.js)
    "plugins": [
      {
        "name": "next"
      }
    ],
    
    // Alias de rutas - "@/" se reemplaza por "./src/"
    // Ejemplo: import Button from '@/components/Button'
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  
  // Archivos que TypeScript debe incluir
  "include": [
    "next-env.d.ts",      // Tipos de Next.js
    "**/*.ts",            // Todos los archivos .ts
    "**/*.tsx",           // Todos los archivos .tsx (React)
    ".next/types/**/*.ts", // Tipos generados por Next.js
    ".next/dev/types/**/*.ts",
    "**/*.mts"            // Módulos TypeScript (.mts)
  ],
  
  // Carpetas que TypeScript debe ignorar
  "exclude": ["node_modules"]
}

```

### ¿Qué es un Bundler?
Un bundler es una herramienta que toma todos tus archivos de código (JS, TS, CSS, imágenes) y los empaqueta en pocos archivos optimizados para el navegador.