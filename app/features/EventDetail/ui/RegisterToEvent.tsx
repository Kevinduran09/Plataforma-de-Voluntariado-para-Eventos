import React, { useEffect, useState } from 'react'
import { SubscribeToEvent } from '../useCases/useCaseEventDetail';
import useAuthStore from '~/store/useAuthStore';
import { useToast } from '~/store/useToastStore';

export default function RegisterToEvent({ idEvent, eventName, isSubscrited }: { idEvent: string, eventName: string, isSubscrited :boolean}) {
    const {user}=useAuthStore()
    const [isSubs, setisSubs] = useState(isSubscrited)
    const {openToast} = useToast()
    const hanleRegister =async () => {
        try {
            const response = await SubscribeToEvent(user.id, idEvent)
            
            if(response){
                setisSubs(!isSubscrited)
                openToast('Registrado', `Te registraste al evento ${eventName}`,'success')
            }
            
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => { }, [isSubs]) 
  return (
      <div className='w-full'>
          <button onClick={hanleRegister} className={`w-full cursor-pointer text-white font-semibold focus:ring-4 focus:outline-none  rounded-2xl text-sm px-5 py-3 text-center transition-all duration-150 ${isSubscrited ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
              Register for this event
          </button>
      </div>
  )
}
