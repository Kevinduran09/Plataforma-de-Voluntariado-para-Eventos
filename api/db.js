const db = {
    usuarios: [
        { id: "1", nombre: "Juan Pérez", correo: "juanperez@example.com", lugar_residencia: "San José", numero_contacto: "+506 8888-9999" },
        { id: "2", nombre: "María Gómez", correo: "mariagomez@example.com", lugar_residencia: "Cartago", numero_contacto: "+506 7777-8888" },
        { id: "3", nombre: "Carlos Ramírez", correo: "carlosramirez@example.com", lugar_residencia: "Alajuela", numero_contacto: "+506 6666-7777" },
        { id: "a419", nombre: "Ana Fernández", correo: "anafernandez@example.com", lugar_residencia: "Heredia", numero_contacto: "+506 5555-6666" }
    ],
    eventos: [
        { id: "1", categoria: "Ambiental", nombre: "Reforestación en el parque", descripcion: "Evento de reforestación para mejorar áreas verdes.", fecha: "2025-04-10", lugar: "Parque Nacional", voluntarios_requeridos: 20, organizador_id: 1 },
        { id: "3", categoria: "Ambiental", nombre: "Limpieza de Playa", descripcion: "Actividad para recolectar desechos.", fecha: "2025-04-20", lugar: "Playa Tamarindo", voluntarios_requeridos: 25, organizador_id: 3 },
        { id: "4", categoria: "Humanitario", nombre: "Recolección de alimentos", descripcion: "Evento para recolectar alimentos no perecederos.", fecha: "2025-05-01", lugar: "Centro de San José", voluntarios_requeridos: 15, organizador_id: 3 }
    ]
};

export default db;