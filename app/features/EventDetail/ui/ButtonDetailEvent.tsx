import React, { useEffect, useState } from 'react'
import { SubscribeToEvent, UnSubscribetoEvent } from '../useCases/useCaseEventDetail';
import useAuthStore from '~/store/useAuthStore';
import { useToast } from '~/store/useToastStore';

export default function ButtonDetailEvent({ idEvent, eventName, isSubscrited, handleSub }: { idEvent: string, eventName: string, isSubscrited: boolean, handleSub: () => void }) {
    const { user } = useAuthStore()

    const { openToast } = useToast()
   
    const handleAction = async () => {
        try {


            const response = isSubscrited ? await UnSubscribetoEvent(user.id, idEvent) : await SubscribeToEvent(user.id, idEvent)
            console.log(response, isSubscrited);

            if (response && !isSubscrited) {
                handleSub()
                openToast('Registrado', `Te registraste al evento ${eventName}`, 'success')
            } else {
                handleSub()
                openToast('Cancelado', `Te des inscribiste al evento ${eventName}`, 'info')
            }

        } catch (error) {
            console.error(error);

        }
    }

    return (
        <div className='w-full'>
            <button onClick={handleAction} className={`w-full cursor-pointer text-white font-semibold focus:ring-4 focus:outline-none  rounded-2xl text-sm px-5 py-3 text-center transition-all duration-150 ${isSubscrited ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                {isSubscrited ? 'Eliminar inscripción' : 'Inscribirse'}
            </button>
        </div>
    )
}
