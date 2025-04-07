import React from 'react';

interface Task {
    id: string;
    nombre: string;
    estado: 'pendiente' | 'completado';
}

interface TaskListProps {
    tasks: Task[];
    statusFilter: 'pendiente' | 'completado';
    title: string;
    borderColor: string;
    badgeColor: string;
    showCompleteButton?: boolean;
    onCompleteTask?: (taskId: string) => void;
    isUserSubscribed?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    statusFilter,
    title,
    borderColor,
    badgeColor,
    showCompleteButton = false,
    onCompleteTask,
    isUserSubscribed = false
}) => {
    const filteredTasks = tasks.filter(task => task.estado === statusFilter);

    if (filteredTasks.length === 0) {
        return (
            <div className="mt-5">
                <h2 className={`text-2xl font-semibold border-l-4 border-l-${borderColor}-500 pl-2`}>
                    {title}
                </h2>
                <div className="p-4 rounded-lg mt-3 text-gray-500">
                    No hay tareas {statusFilter === 'pendiente' ? 'pendientes' : 'completadas'}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-5">
            <h2 className={`text-2xl font-semibold border-l-4 border-l-${borderColor}-500 pl-2`}>
                {title}
            </h2>
            <div className="p-4 rounded-lg mt-3">
                <ul className="list-disc list-inside text-gray-800">
                    {filteredTasks.map((task) => (
                        <li
                            key={task.nombre}
                            className="flex justify-between flex-wrap items-center py-2 border-b-2 shadow-2xs pb-5 mt-3 border-gray-300"
                        >
                            <div className="flex-1">
                                <span>{task.nombre}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`bg-${badgeColor}-500 text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                    {task.estado}
                                </span>
                                {(showCompleteButton && isUserSubscribed && task.estado === 'pendiente') && (
                                    <button
                                        onClick={() => onCompleteTask?.(task.nombre)}
                                        className="ml-4 text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg cursor-pointer"
                                    >
                                        Completar
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;