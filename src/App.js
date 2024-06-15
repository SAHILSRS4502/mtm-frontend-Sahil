import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // This effect runs once when the component mounts
        console.log('Component mounted');
        
        // You could fetch initial data here, e.g., from an API
        // Example: fetchTasks();

        return () => {
            // Cleanup function runs when the component unmounts
            console.log('Component will unmount');
        };
    }, []);

    const addTask = (description) => {
        const newTask = {
            id: Date.now(),
            description,
        };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (id, newDescription) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, description: newDescription } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app-container">
            <div className="bordered-container">
                <h1 className="my-4">Itinerary Planner</h1>
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default App;

