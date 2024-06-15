import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;

