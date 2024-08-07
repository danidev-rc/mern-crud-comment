# MERN CRUD Comment

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) de comentarios, construida utilizando el stack MERN (MongoDB, Express, React, Node.js). Proporciona una base sólida para gestionar comentarios con autenticación y manejo de datos.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Características

- CRUD completo para la gestión de comentarios.
- Autenticación de usuarios y protección de rutas.
- Validación de datos en el servidor.
- Configuración de CORS para aplicaciones seguras.
- Registro de solicitudes HTTP para monitoreo.

## Tecnologías Utilizadas

### Backend

- **Express**: Framework para construir aplicaciones web y APIs.
- **Mongoose**: ORM para MongoDB y Node.js, facilita la interacción con la base de datos.
- **Bcryptjs**: Utilizado para el hasheo de contraseñas.
- **Jsonwebtoken**: Implementación de JSON Web Tokens para la autenticación.
- **Cors**: Middleware para habilitar CORS.
- **Morgan**: Middleware para el registro de solicitudes HTTP.
- **Zod**: Biblioteca para la validación de datos.

### Herramientas de Desarrollo

- **Nodemon**: Herramienta para reiniciar automáticamente el servidor al detectar cambios en el código.
- **PNPM**: Gestor de paquetes utilizado para la instalación de dependencias.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/mern-crud-comment.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd mern-crud-comment
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
   JWT_SECRET=tu-secreto
   ```

5. Inicia el servidor:

   ```bash
   pnpm start
   ```

## Uso

Después de iniciar el servidor, puedes interactuar con la API utilizando herramientas como Postman o directamente desde tu aplicación cliente.

### API Endpoints

- **POST /api/auth/register**: Registro de un nuevo usuario.
- **POST /api/auth/login**: Inicio de sesión de un usuario.
- **GET /api/auth/profile**: Obtiene el perfil del usuario autenticado.
- **POST /api/comments**: Crear un nuevo comentario.
- **GET /api/comments**: Obtener todos los comentarios.
- **GET /api/comments/:id**: Obtener un comentario por su ID.
- **PUT /api/comments/:id**: Actualizar un comentario por su ID.
- **DELETE /api/comments/:id**: Eliminar un comentario por su ID.

## Estructura del Proyecto

```plaintext
.
├── src
│   ├── config
│   │   └── index.js
│   ├── controllers
│   │   └── auth.controller.js
│   │   └── comments.controller.js
│   ├── database
│   │   └── index.js
│   ├── libs
│   │   └── jwt.js
│   ├── middlewares
│   │   └── validateToken.js
│   │   └── validator.middleware.js
│   ├── models
│   │   └── user.model.js
│   │   └── comment.model.js
│   ├── routes
│   │   └── auth.routes.js
│   │   └── comment.routes.js
│   │   └── index.js
│   ├── schemas
│   │   └── auth.schema.js
│   │   └── comment.schema.js
│   └── app.js
│   └── index.js
├── package.json
├── .nvmrc
├── pnpm-lock.yaml
└── README.md
```
