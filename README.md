
<p align="center">
<a href="/"><img src='logo.png' width="250" alt="Task Manager" /></a>
</p>

<p align="center" >
<a href="https://react.dev/" target="_blank"><img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?logo=react&logoColor=white"></a>
<a href="https://expressjs.com/" target="_blank"><img alt="Express" src="https://img.shields.io/badge/Express-000000.svg?logo=express&logoColor=white"></a>
<a href="https://www.mongodb.com/" target="_blank"><img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248.svg?logo=mongodb&logoColor=white"></a>
<a href="https://nodejs.org/" target="_blank"><img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933.svg?logo=node.js&logoColor=white"></a>
<a href="https://axios-http.com/" target="_blank"><img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4.svg?logo=axios&logoColor=white"></a>
<a href="https://jwt.io/" target="_blank"><img alt="JWT" src="https://img.shields.io/badge/JWT-000000.svg?logo=json-web-tokens&logoColor=white"></a>
</p>

## Descripción

**Task Manager**: Este repositorio contiene un backend para un administrador de tareas, desarrollado con React en el frontend y Node.js, Express y MongoDB en el backend. Se utiliza JWT para la autenticación y Axios para la comunicación entre el frontend y el backend.

**Estado**: Finalizado.

## Instalación de librerías

```bash
npm install
```

## Tener la base de datos creada en Mongo:

El nombre de la base de datos debe ser *merndb*

## Iniciar la aplicación

```bash
npm run start

# En modo de desarrollo
npm run start:dev
```

# Peticiones

### Registro de usuario:

Método: POST

```
http://localhost:5173/register
```

### Login de usuario:

Método: POST

```
http://localhost:5173/login
```

### Crear tarea:

Método: POST

```
http://localhost:5173/add-task
```

### Mostrar tareas del usuario:

Método: GET

```
http://localhost:5173/tasks
```

### Actualizar tarea:

Método: PUT

```
http://localhost:5173/tasks/id-de-la-tarea
```
