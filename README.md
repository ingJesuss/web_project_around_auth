# Around the US - Autenticación

Una red social interactiva donde los usuarios pueden compartir fotos de lugares que han visitado alrededor de Estados Unidos, con sistema completo de autenticación.

## 🎯 Propósito del Proyecto

Este proyecto es una aplicación web tipo Instagram enfocada en compartir fotografías de lugares turísticos y paisajes de Estados Unidos. Los usuarios pueden crear perfiles, subir fotos, interactuar con publicaciones de otros usuarios y gestionar su perfil personal.

## ✨ Funcionalidades Principales

### Autenticación

- 📝 **Registro de usuarios** - Creación de cuenta nueva con email y contraseña
- 🔐 **Inicio de sesión** - Acceso seguro con credenciales
- 🚪 **Cerrar sesión** - Salida segura de la aplicación
- 🔒 **Rutas protegidas** - Solo usuarios autenticados pueden acceder al contenido

### Gestión de Perfil

- 👤 **Editar perfil** - Modificar nombre y descripción personal
- 🖼️ **Cambiar avatar** - Actualizar foto de perfil
- 📧 **Visualizar email** - Mostrar email del usuario en el header

### Gestión de Tarjetas

- ➕ **Agregar tarjetas** - Subir fotos con título y URL de imagen
- ❤️ **Sistema de likes** - Dar y quitar me gusta a publicaciones
- 🗑️ **Eliminar tarjetas** - Remover publicaciones propias
- 🖼️ **Vista previa** - Ver imágenes en popup ampliado

### Interfaz Responsive

- 📱 **Diseño móvil** - Menú hamburguesa y layout adaptativo
- 💻 **Diseño desktop** - Interfaz tradicional optimizada
- 🎨 **Popups elegantes** - Mensajes de éxito/error con iconos
- 🔄 **Animaciones suaves** - Transiciones y efectos visuales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario
- **Vite** - Herramienta de desarrollo rápida y moderna
- **React Router DOM** - Navegación entre páginas y rutas protegidas
- **CSS3** - Estilos personalizados con metodología BEM
- **JavaScript ES6+** - Lógica de la aplicación
- **Fetch API** - Comunicación con el servidor
- **LocalStorage** - Almacenamiento de tokens de autenticación

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── App.jsx          # Componente principal
│   ├── Header/          # Encabezado con navegación
│   ├── Main/            # Contenido principal
│   ├── Footer/          # Pie de página
│   ├── Login/           # Formulario de inicio de sesión
│   ├── Register/        # Formulario de registro
│   ├── ProtectedRoute/  # Componente de rutas protegidas
│   └── InfoTooltip/     # Mensajes de notificación
├── blocks/              # Archivos CSS con metodología BEM
├── images/              # Recursos gráficos
├── utils/               # Utilidades y configuración de API
└── contexts/            # Contextos de React

```

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/ingJesuss/web_project_around.git
   cd web_project_around
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

## � Demo

[Ver proyecto en vivo](https://ingjesuss.github.io/web_project_around/)

## 📂 Repositorio

[GitHub Repository](https://github.com/ingJesuss/web_project_around)

## 👨‍💻 Desarrollador

**Jesús** - [GitHub](https://github.com/ingJesuss)

---

_Proyecto desarrollado como parte del programa de TripleTen - Sprint 17_
