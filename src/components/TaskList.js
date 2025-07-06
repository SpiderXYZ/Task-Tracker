import React from 'react'
import TaskItem from './TaskItem'


function TaskList({tasks, filter, onToggleComplete, onDeleteTask , onEditTask}) {

    const filteredTasks = tasks.filter(task =>{
        if(filter === 'completed') return task.completed;
        if(filter === 'pending') return !task.completed;
        return true;
    })

    if(tasks.length === 0){
        return <p className='no-tasks-message'> No tasks here. Go add few ig </p>
    }

    if(filteredTasks.length === 0){
        return <p className='no-tasks-message'>No tasks matching the current filter</p>
    }

  return (
    <div className="task-list">
        {filteredTasks.map((task)=>(
            <TaskItem
                key = {task.id}
                task = {task}
                onToggleComplete = {onToggleComplete}
                onDeleteTask = {onDeleteTask}
                onEditTask = {onEditTask}>
            </TaskItem>
        ))}
    </div>
  );
}

export default  TaskList;
