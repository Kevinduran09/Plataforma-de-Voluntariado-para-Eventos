import { useToast } from '~/store/useToastStore';
import { CompleteTask } from '../useCases/useCaseEventDetail';
import TaskList from './TaskList';
import { useRevalidator } from 'react-router';



export const EventTasks = ({ tareas, isUserSubscribed, evento_id }: { tareas: Array<any>; isUserSubscribed: boolean, evento_id: string }) => {
    const { openToast } = useToast()
    const revalidator = useRevalidator()
    const handleCompleteTask = async (taskname: string) => {

        try {
            const new_tareas = tareas.map(t => t.nombre === taskname ? { ...t, estado: 'completado' } : t)
            const result = await CompleteTask(new_tareas, evento_id)
            console.log(result);
            if (result.savedOffline) {
                openToast('Guardado offline', `Se realizara el cambio cuando tenga conexion de nuevo`, 'success')
                revalidator.revalidate()
            } else {

                openToast('Completado!', `Haz completado la tarea ${taskname}`, 'success')
                revalidator.revalidate()
            }
        } catch (error) {
            console.error("Error:", error);
            openToast('ERROR', 'No se ha podido completar la tarea', 'error')
        }
    };

    return (
        <div>
            <TaskList
                tasks={tareas || []}
                statusFilter="pendiente"
                title="Tareas Pendientes"
                borderColor={"green"}
                badgeColor={"green"}
                showCompleteButton={true}
                onCompleteTask={handleCompleteTask}
                isUserSubscribed={isUserSubscribed}
            />

            <TaskList
                tasks={tareas || []}
                statusFilter="completado"
                title="Tareas Completadas"
                borderColor={"red"}
                badgeColor={"red"}
                showCompleteButton={false}
            />
        </div>
    );
};