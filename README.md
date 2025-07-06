# Task Tracker

A simple but powerful task management application built with React. This project fulfills a set of requirements for a typical front-end challenge, focusing on core React concepts, component structure, and data persistence using `localStorage`.

## Features

🔐 **Simple Login**
- A basic login form that only requires a username.
- The username is stored in `localStorage` to simulate a logged-in session.
- The app redirects to the main task dashboard upon "login".
- Tasks are stored on a per-user basis.

📋 **Task Management (CRUD)**
- **Add Task**: A form to add new tasks with a required title and an optional description.
- **Edit Task**: Tasks can be edited inline by clicking the "Edit" button.
- **Delete Task**: Tasks can be deleted with a confirmation prompt.
- **Toggle Complete**: A checkbox marks tasks as completed or pending.

🎨 **Task Display**
- Displays the task's title, description, and completion status.
- Shows the creation date and time for each task.
- Completed and pending tasks are visually distinct for clarity.

🔍 **Task Filtering**
- Filter tasks by "All", "Completed", or "Pending" status.
- Each filter tab displays a count of the tasks within that category.

💾 **Data Persistence**
- All tasks are saved to the browser's `localStorage`.
- Your tasks will remain available even after you refresh the page or close the browser tab.

## Technical Requirements Met

- **Framework**: Built with React using functional components and hooks (`useState`, `useEffect`, `useMemo`).
- **State Management**: Uses only React's built-in state management; no external libraries like Redux.
- **Styling**: Styled with clean, modern CSS.
- **Responsive Design**: The layout adapts gracefully to both mobile and desktop screen sizes.
- **Code Quality**: The code is organized into a clean, readable component structure.

## TO RUN LOCALLY 
- 1. **Clone the repository (or set up the project):**
   ```bash
        npx create-react-app task-tracker
        cd task-tracker

- 2. **Install the dependencies :** 
    ```bash
        npm install 

- 3. **Start the development server:** 
    ```bash
        npm start 

