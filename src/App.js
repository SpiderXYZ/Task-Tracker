import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import { loadTasks, saveTasks, loadUser, saveUser, clearUser } from './utils/localStorage';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 

  
  useEffect(() => {
    const storedUser = loadUser();
    if (storedUser) {
      setUser(storedUser);
      setTasks(loadTasks(storedUser) || []);
    }
  }, []);

  useEffect(() => {
    if (user) {
      saveTasks(user, tasks);
    }
  }, [tasks, user]);

  const handleLogin = (username) => {
    const trimmedUsername = username.trim();
    if (trimmedUsername) {
      setUser(trimmedUsername);
      saveUser(trimmedUsername);
      setTasks(loadTasks(trimmedUsername) || []);
    }
  };

  const handleLogout = () => {
    clearUser();
    setUser(null);
    setTasks([]);
  };

  const handleAddTask = (task) => {
    const newTask = { 
      id: Date.now(), 
      ...task, 
      completed: false, 
      createdAt: new Date().toISOString() 
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const handleEditTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome, {user}!</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <main>
        <div className="task-manager">
          <TaskForm onAddTask={handleAddTask} />
          <TaskFilter currentFilter={filter} onSetFilter={setFilter} tasks={tasks} />
          <TaskList
            tasks={tasks}
            filter={filter}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;