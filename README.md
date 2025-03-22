# VoluntApp

VoluntApp es una plataforma para conectar voluntarios con oportunidades de voluntariado en su comunidad.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/voluntapp.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd voluntapp
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Iniciar el Servidor JSON

Para iniciar el servidor JSON, utiliza el siguiente comando:

```bash
npm run server
```

Este comando levantará un servidor JSON en `http://localhost:3000`.

## API del Servidor JSON

El servidor JSON proporciona las siguientes rutas:

- **GET /volunteers**: Obtiene la lista de voluntarios.
- **POST /volunteers**: Agrega un nuevo voluntario.
- **GET /volunteers/:id**: Obtiene un voluntario por ID.
- **PUT /volunteers/:id**: Actualiza un voluntario por ID.
- **DELETE /volunteers/:id**: Elimina un voluntario por ID.

### Ejemplos de Respuestas

- **GET /volunteers**
    ```json
    [
      {
        "id": 1,
        "name": "Juan Perez",
        "email": "juan.perez@example.com",
        "phone": "123-456-7890"
      },
      {
        "id": 2,
        "name": "Maria Lopez",
        "email": "maria.lopez@example.com",
        "phone": "098-765-4321"
      }
    ]
    ```

- **POST /volunteers**
    ```json
    {
      "id": 3,
      "name": "Carlos Sanchez",
      "email": "carlos.sanchez@example.com",
      "phone": "111-222-3333"
    }
    ```

### Ejemplos de Consultas

- Obtener todos los voluntarios:
    ```bash
    curl http://localhost:3000/volunteers
    ```

- Agregar un nuevo voluntario:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "Carlos Sanchez", "email": "carlos.sanchez@example.com", "phone": "111-222-3333"}' http://localhost:3000/volunteers
    ```

## Stack Tecnológico

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB

## Comando Custom para Generar un Módulo

Para generar un nuevo módulo en el proyecto, utiliza el siguiente comando:

```bash
npm run generate:module --nombre <nombre-del-modulo>
```

Este comando creará la estructura básica de archivos y carpetas para un nuevo módulo siguiendo la arquitectura modular.

## Arquitectura Modular (Clean Architecture)

El proyecto sigue los principios de Clean Architecture para mantener un código limpio y escalable. La estructura del proyecto está organizada de la siguiente manera:

- **src**
  - **modules**: Contiene los diferentes módulos de la aplicación.
    - **<modulo>**
      - **controllers**: Controladores para manejar las solicitudes HTTP.
      - **services**: Lógica de negocio y servicios.
      - **models**: Modelos de datos y esquemas de la base de datos.
      - **routes**: Definición de las rutas del módulo.
  - **config**: Configuración de la aplicación.
  - **middlewares**: Middlewares personalizados.
  - **utils**: Utilidades y funciones helper.

Esta estructura permite una fácil escalabilidad y mantenimiento del código, asegurando que cada módulo sea independiente y cohesivo.
