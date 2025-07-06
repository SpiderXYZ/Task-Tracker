
const USER_KEY = 'taskTrackerUser';

export const saveUser = (username) => {
    localStorage.setItem(USER_KEY, username);
};

export const loadUser = () => {
    return localStorage.getItem(USER_KEY);
};

export const clearUser = () => {
    localStorage.removeItem(USER_KEY);
};

const getTasksKey = (username) => `tasks_${username}`;

export const saveTasks = (username, tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem(getTasksKey(username), serializedState);
  } catch (e) {
    console.error("Could not save tasks", e);
  }
};

export const loadTasks = (username) => {
  try {
    const serializedState = localStorage.getItem(getTasksKey(username));
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load tasks", e);
    return undefined;
  }
};