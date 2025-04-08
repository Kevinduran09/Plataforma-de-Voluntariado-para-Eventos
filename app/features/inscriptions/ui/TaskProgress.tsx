import React from 'react';
import { type Tarea } from '~/features/EventDashboard/domain/EventDashboard';
import { calculateTaskProgress } from '../domain/eventHelper';

interface TaskProgressProps {
    tasks: Tarea[];
}

export default function TaskProgress({ tasks }: TaskProgressProps) {
    const { completed, total, percentage } = calculateTaskProgress(tasks);

    return (
        <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Tareas: {completed}/{total}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}