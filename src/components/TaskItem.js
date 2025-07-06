import React, { useState } from 'react';

function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (editedTitle.trim()) {
      onEditTask(task.id, { title: editedTitle, description: editedDescription });
      setIsEditing(false);
    } else {
        alert("Title cannot be empty.");
    }
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };

  const creationDate = new Date(task.createdAt).toLocaleString();

  return (
    <div className={`task-item card ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="task-edit-form">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="form-input"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="form-input"
          ></textarea>
          <div className="task-actions">
            <button onClick={handleSave} className="btn btn-primary">Save</button>
            <button onClick={handleCancel} className="btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="task-checkbox"
            />
            <div className="task-details">
                <h4 className={task.completed ? 'strikethrough' : ''}>{task.title}</h4>
                {task.description && <p className={task.completed ? 'strikethrough' : ''}>{task.description}</p>}
                <small className="task-date">Created: {creationDate}</small>
            </div>
          </div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)} className="btn">Edit</button>
            <button onClick={() => onDeleteTask(task.id)} className="btn btn-danger">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;