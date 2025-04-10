import { create } from "zustand";

type ToastType = 'success' | 'error' | 'info';

let toastTimeout: NodeJS.Timeout | null = null;
interface toastInterface{
    isOpen:boolean,
    title:string,
    message:string,
    type: ToastType,
    openToast:(title:string,message:string,type?:ToastType,duration?:number)=>void,
    closeToast:()=>void
}

export const useToast = create <toastInterface>((set)=>({
    isOpen:false,
    title:'',
    message:'',
    type:'info',
    openToast: (title,message, type='success', duration=3000)=>{
    // Limpiar cualquier timeout anterior
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    set({isOpen:true,title:title,message:message,type:type})

    toastTimeout = setTimeout(()=>{
        set({ isOpen: false, title:title,message:'',type:'info'})
        toastTimeout=null
    }, duration)
    },
    closeToast: ()=>set({isOpen:false})

}))