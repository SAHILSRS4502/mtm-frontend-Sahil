import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
            setError('');
        } else {
            setError('Task cannot be empty');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button type="submit" className="btn btn-primary">
                    Add Task
                </button>
            </div>
            {error && <div className="text-danger mt-2">{error}</div>}
        </form>
    );
};

export default TaskInput;


