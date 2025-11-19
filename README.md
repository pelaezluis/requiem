# Cry Love Cry - Blog

Un blog elegante con diseño de espejo antiguo construido con Vue.js 3 y Materialize CSS.

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── BlogHeader.vue  # Header del blog con título y navegación
│   ├── BlogMain.vue    # Contenedor principal de posts
│   ├── BlogCard.vue    # Tarjeta individual de blog post
│   ├── EmptyState.vue  # Estado vacío cuando no hay posts
│   ├── MyComponent.vue # Componente principal (legacy)
│   └── index.js        # Exportaciones de componentes
├── views/               # Vistas de la aplicación
│   └── BlogView.vue    # Vista principal del blog
├── config/              # Configuraciones
│   └── constants.js    # Constantes de la aplicación
├── assets/              # Recursos estáticos
│   ├── styles/         # Estilos globales
│   │   └── global.css  # CSS global y utilidades
│   └── frame_post.png  # Imagen del marco antiguo
├── store.js             # Store de Vuex
├── main.js              # Punto de entrada
└── App.vue              # Componente raíz
```

## 🚀 Características

- **Componentes Separados**: Arquitectura modular y mantenible
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Marco Antiguo**: Efecto visual único con imagen personalizada
- **Materialize CSS**: Framework de UI moderno y elegante
- **Vuex**: Gestión de estado centralizada
- **Animaciones**: Transiciones suaves y efectos hover

## 🎨 Componentes Principales

### BlogHeader
- Título del blog (configurable desde el store)
- Botones de navegación (Inicio, Login)
- Diseño con gradientes y sombras

### BlogCard
- Tarjeta individual de blog post
- Marco de espejo antiguo personalizable
- Imagen, título, descripción, autor y fecha
- Botón de acción "LEER BLOG"

### BlogMain
- Orquestador de posts
- Manejo del estado vacío
- Grid responsivo de tarjetas

### EmptyState
- Mensaje cuando no hay posts disponibles
- Mantiene el diseño del marco

## 🔧 Configuración

### Constantes
- Colores del tema
- Tamaños de frames
- Configuración de API
- Configuración de UI

### Store (Vuex)
- Estado del blog
- Posts de ejemplo
- Getters para verificar existencia de posts

## 📱 Responsive Design

- **Desktop**: Grid de 3 columnas
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna
- **Frames**: Tamaño adaptativo (30vw con límites)

## 🎭 Efectos Visuales

- **Marco Antiguo**: Imagen personalizada con sombras
- **Hover Effects**: Escalado y sombras dinámicas
- **Animaciones**: Fade-in y slide-up
- **Gradientes**: Fondos y botones con gradientes
- **Sombras**: Efectos de profundidad

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run serve

# Construir para producción
npm run build
```

## 🔮 Futuras Mejoras

- [ ] Implementación de rutas con Vue Router
- [ ] Sistema de autenticación
- [ ] API real para posts
- [ ] Sistema de comentarios
- [ ] Búsqueda y filtros
- [ ] Modo oscuro/claro
- [ ] PWA capabilities

## 🎨 Personalización

Los colores y estilos se pueden modificar fácilmente en:
- `src/config/constants.js` - Colores del tema
- `src/assets/styles/global.css` - Estilos globales
- Componentes individuales - Estilos específicos

## 📄 Licencia

Este proyecto es de uso personal y educativo.
