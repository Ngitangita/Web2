import React, { useState } from 'react';
import './insertUpdateDelete.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Allez à l\'école' },
    { id: 2, text: 'Faites ton exercice' },
    // ... d'autres tâches
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { id: Date.now(), text: newTaskText };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleUpdateTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Ma Liste de Tâches</h1>
      <div className="task-form">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button className='Add-button' onClick={handleAddTask}>Ajouter</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task">
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleUpdateTask(task.id, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <div className="buttons">
              <button className='update-button' onClick={() => setEditingTaskId(task.id)}>
                Modifier
              </button>
              <button className='delete-button' onClick={() => handleDeleteTask(task.id)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
