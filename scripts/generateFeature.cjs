const fs = require('fs');
const path = require('path');



// Mapeo de carpetas a plantillas
const templateMap = {
    ui: ['componentTemplate.tsx'],
    domain: ['modelTemplate.ts','repositoryTemplate.ts'],
    infrastructure: ['apiTemplate.ts'],
    useCases: ['useCaseTemplate.ts'],
    pages: ['pageTemplate.tsx'],
    index: ['indexTemplate.ts'],
};

// Función para leer una plantilla y reemplazar el nombre de la feature
const renderTemplate = (templatePath, featureName) => {
    let templateContent = fs.readFileSync(templatePath, 'utf8');
    // Reemplazar todas las instancias de `${featureName}` en la plantilla
    const renderTemplate = templateContent.replace(/\${featureName}/g, featureName);
    return renderTemplate
};

const generateFeature = (featureName) => {
    const featurePath = path.join(__dirname, '../app/features', featureName);
    debugger
    // Estructura de archivos
    const files = {
        ui: [`${featureName}Component.tsx`],
        domain: [`${featureName}.ts`, `${featureName}Repository.ts`],
        infrastructure: [`${featureName}Api.ts`],
        useCases: [`useCase${featureName}.ts`],
        pages: [`${featureName}Page.tsx`],
        index: ['index.ts'],
    };
    // if(!fs.existsSync(path.join(__dirname,'../app/features'))){
    //     fs.mkdirSync('features',{recursive:true})
    // }
    if (fs.existsSync(featurePath)) {
        console.log(`Error: ${featureName} ya existe en la ruta de features`);
        return
    }
    // Crear la carpeta principal de la feature
    if (!fs.existsSync(featurePath)) {
        fs.mkdirSync(featurePath, { recursive: true });
    }

    // Crear las carpetas para cada capa y los archivos correspondientes
    Object.keys(files).forEach((folder) => {
        const folderPath = folder === 'index' ? featurePath : path.join(featurePath, folder);


        if (!fs.existsSync(folderPath) && folder !== 'index') {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        files[folder].forEach((file,index) => {
            const filePath = path.join(folderPath, file);
            debugger
            // Obtener la plantilla desde el objeto de mapeo
            const templatesFolder = templateMap[folder];
           
            
            const templatePath = path.join(__dirname, '../scripts/templates', templatesFolder[index]);
            // Generar el contenido del archivo a partir de la plantilla
            const content = renderTemplate(templatePath, featureName);
            // Crear el archivo con el contenido generado
            fs.writeFileSync(filePath, content);
            console.log(`Archivo generado: ${filePath}`);
            

          

         

        });
    });

    console.log(`Feature ${featureName} generada exitosamente.`);
    // encontrar la ruta de routes
    const routepath = path.join(__dirname, '../app/routes.ts')

    const routFileContent = fs.readFileSync(routepath, 'utf-8')

    // 2. Usar regex para extraer el contenido dentro de export default [ ... ]
    const match = routFileContent.match(/export default \[(.*?)\] satisfies RouteConfig;/s);

    if (!match) {
        console.error("No se encontró el arreglo de rutas en el archivo.");
        process.exit(1);
    }

    const routesArrayText = match[1].trim();

    // 3. Definir la nueva ruta a agregar
    const newRoute = `route('${featureName.toLowerCase() }', 'features/${featureName}/pages/${featureName}Page.tsx')`;

    // 4. Agregar la nueva ruta al final del array
    const updatedRoutesArrayText = routesArrayText.replace(/\s*$/, `,\n  ${newRoute}`);

    // 5. Reconstruir el código actualizado
    const updatedRoutesText = `import { type RouteConfig, index, route,layout } from "@react-router/dev/routes";\n\nexport default [\n  ${updatedRoutesArrayText}\n] satisfies RouteConfig;\n`;

    // 6. Escribir el archivo actualizado
    fs.writeFileSync(routepath, updatedRoutesText, 'utf-8');

    console.log("Ruta agregada correctamente.");
};

// Llamada al script con el nombre de la feature como argumento
const featureName = process.argv[2];
generateFeature(featureName);
