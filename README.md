# Pokédex Challenge

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)

Aplicación cliente para exploración de Pokémon con sistema de autenticación y caching avanzado.

**Demo**: [Ver en Vercel](https://---.vercel.app)

## ✨ Características Principales

- 🚀 **Listado de Pokémon** con paginación y búsqueda en tiempo real por nombre
- 🔒 **Autenticación** basada en sessionStorage
- ⚡ **Caching inteligente** con React Query
- 📱 **Diseño responsive** mobile-first
- 🎨 Estilos personalizados con Tailwind CSS + Sass
- 🧪 **Cobertura de tests** con Playwright y Jest
- 🔄 **Sistema de rutas** protegidas con React Router

## 🛠 Stack Técnico

**Core**

- Vite
- React + TypeScript
- React Router
- @tanstack/react-query

**Estilos**

- Tailwind CSS
- Sass

**Testing**

- Playwright
- Jest
- Testing Library

**QA**

- ESLint (Vite default config)

## Next Steps

- Usar husky para precommit hooks (eslint, prettier, test)
- Agregar skeletom para loading de componentes
- Agregar componentes de error
- Almacenar filtros en URL (paginación, búsqueda)

## 🚀 Project Installation

- `npm install`
- `npm run dev`

## 🧪 Tests

### Unit Tests

- `npm run test` (Jest)

### E2E Tests

- `npm run dev` (Start the app locally) \*[required]
- `npm run test:e2e` (Playwright Test e2e)
