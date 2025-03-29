import React from 'react'
import type { Evento } from '../domain/EventDashboard'



export const ItemListComponent: React.FC<{ item: Evento }> = ({ item }) => {
    return (
        <>

            <div key={item.id} className='p-3 border-2 border-gray-400 rounded-md '>
                <span className='text-lg capitalize font-bold inline-block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z" /><path d="M8 14h2v2h-2z" /></svg>
                    nombre evento: {item.nombre}</span>
                <div className='flex flex-col py-2 gap-3'>
                    <span>Descripcion: {item.descripcion}</span>
                </div>
                <div className='flex flex-col py-2 gap-3'>
                    <span>Categoria: {item.categoria}</span>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <h2 className='font-semibold'>Tareas</h2>
                    {item.tareas.map((tarea) => {
                        return <span>{tarea.nombre} - <span className={`${tarea.estado === 'completado' ? 'text-green-400' : 'text-red-500'}`}>{tarea.estado}</span></span>
                    })}
                </div>
            </div>

        </>
    )
}
