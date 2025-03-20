import React from 'react';

import { useLoaderData } from 'react-router';
import { GetEventDashboard } from '../useCases/useCaseEventDashboard';

export async function clientLoader() {
    const data = await GetEventDashboard()

    if (!data) {
        throw new Error('Error al cargar los datos')
    }

    return { data: data.slice(0, 20) }
}

export default function EventDashboardPage() {
    const { data } = useLoaderData()





    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-5'>
            {
                data.map((f: any) => {
                    return <div className='p-3 border-2 border-gray-400 rounded-md'>
                        <span className='text-lg capitalize font-bold'>userId: {f.userId}</span>
                        <div className='flex flex-col py-2 gap-3'>
                            <span>Titulo: {f.title}</span>
                            <span>Estado: <span className={f.completed ? 'text-green-500' : 'text-red-500'}>{f.completed ? 'Completado' : 'Incompleto'}</span></span>
                        </div>
                    </div>
                })
            }
        </div>
    )
}