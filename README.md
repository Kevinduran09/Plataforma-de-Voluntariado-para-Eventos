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

## Stack Tecnológico

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB
- **Autenticación**: JWT (JSON Web Tokens)

## Comando Custom para Generar un Módulo

Para generar un nuevo módulo en el proyecto, utiliza el siguiente comando:

```bash
npm run feature -- <nombre-del-modulo>
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

## Contribuir

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
