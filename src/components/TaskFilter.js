import React, { useMemo } from 'react';

function TaskFilter({ currentFilter, onSetFilter, tasks }) {

  const taskCounts = useMemo(() => {
    return {
      all: tasks.length,
      pending: tasks.filter(t => !t.completed).length,
      completed: tasks.filter(t => t.completed).length
    };
  }, [tasks]);

  return (
    <div className="task-filter">
      <button 
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onSetFilter('all')}
      >
        All ({taskCounts.all})
      </button>
      <button 
        className={`filter-btn ${currentFilter === 'pending' ? 'active' : ''}`}
        onClick={() => onSetFilter('pending')}
      >
        Pending ({taskCounts.pending})
      </button>
      <button 
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onSetFilter('completed')}
      >
        Completed ({taskCounts.completed})
      </button>
    </div>
  );
}

export default TaskFilter;