import TaskList from './TaskList'; // Ensure TaskList is a valid React component

// En tu componente principal
interface Event {
    tareas?: Array<any>; // Replace 'any' with the actual type of 'tareas' if known
}

export const EventTasks = ({ tareas, isUserSubscribed }: { tareas: Array<any>; isUserSubscribed: boolean }) => {
    const handleCompleteTask = (taskId:any) => {
        // Lógica para marcar tarea como completada
        console.log('Completar tarea:', taskId);
    };

    return (
        <div>
        <TaskList // Ensure TaskList is used as a React component
        tasks= { tareas || [] }
        statusFilter = "pendiente"
        title = "Tareas Pendientes"
        borderColor = "green"
        badgeColor = "green"
        showCompleteButton = { true}
        onCompleteTask = { handleCompleteTask }
        isUserSubscribed = { isUserSubscribed }
        />

        <TaskList
        tasks={ tareas || [] }
        statusFilter = "completado"
        title = "Tareas Completadas"
        borderColor = "red"
        badgeColor = "red"
        showCompleteButton = { false}
        />
    </div>
  );
};