# Fintech Landing Page

Landing page para una fintech que muestra un catálogo de productos financieros con filtros y detalles.

## Características

- Catálogo de productos financieros con filtros por categoría
- Páginas de detalle para cada producto
- Diseño responsive (Mobile First)
- Tipado estricto con TypeScript
- Combinación de TailwindCSS y Styled Components
- Componentes reutilizables
- Accesibilidad (a11y) implementada

## Tecnologías

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Styled Components

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install


# Respuestas a Preguntas Complementarias

## 1. Criterios para diseñar la UI de productos financieros
**Claridad**: Información financiera debe ser fácil de entender

**Confianza**: Diseño profesional que inspire seguridad

**Jerarquía visual**: Destacar información importante como tasas de interés

**Accesibilidad**: Contraste adecuado, etiquetas ARIA, navegación por teclado

**Responsividad**: Funcional en todos los dispositivos

## 2. Decisión entre Tailwind y Styled Components
**TailwindCSS**: Para layout general, estilos utilitarios y prototipado rápido

**Styled Components**: Para componentes reutilizables con lógica de estilo compleja

**Regla**: Tailwind para estilos globales y layout, Styled Components para componentes UI específicos

## 3. Escalabilidad en aplicación real de banca digital
Implementar autenticación segura

Integración con APIs reales (GraphQL/REST)

Estado global (Redux/Context)

Microfrontends para diferentes áreas

Pruebas automatizadas (unitarias, integración, E2E)

CI/CD pipeline

Monitoreo de rendimiento

## 4. Herramientas para rendimiento y monitoreo
**Rendimiento**: Next.js Analytics, Lighthouse, Web Vitals

**Monitoreo**: Sentry, LogRocket, Datadog

**Optimización**: Image Optimization de Next.js, CDN, caching

**Bundling**: Análisis de bundle con Webpack Bundle Analyzer