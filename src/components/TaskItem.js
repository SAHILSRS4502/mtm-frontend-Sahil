import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task.description);

    const handleUpdate = () => {
        if (newTask.trim()) {
            updateTask(task.id, newTask);
            setIsEditing(false);
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isEditing ? (
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button className="btn btn-success mx-1" onClick={handleUpdate}>
                        Save
                    </button>
                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </div>
            ) : (
                <>
                    <span>{task.description}</span>
                    <div>
                        <button className="btn btn-warning mx-1" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TaskItem;

