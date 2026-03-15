# Task Manager

A minimal task management app built with React and TypeScript. Part of a series of small projects focused on practising core React and TypeScript concepts.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&labelColor=20232A)
![MUI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui&logoColor=white&labelColor=20232A)

<!-- ![Task manager](src/assets/task-manager.png) -->

<img src="src/assets/task-manager.png" width="400" />

<img src="src/assets/tasks-completed1.png" width="300" />
<img src="src/assets/filter-completed.png" width="300" />

## Features

- Add and delete tasks
- Mark tasks as completed
- Filter tasks by status - All, Active or Completed
- Clear all completed tasks at once
- Persistent state via localStorage

## Tech Stack

- **React** – component structure, hooks (`useState`, `useEffect`)
- **TypeScript** – typed props, state, and custom types
- **Material UI** – component library and theming
- **Vite** – build tool and dev server

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Filter.tsx
│   ├── TaskForm.tsx
│   └── TaskList.tsx
├── types/
│   ├── FilterType.ts
│   └── Task.ts
├── App.tsx
├── theme.ts
└── main.tsx
```

## Concepts Practised

- Lifting state up
- Controlled components
- Derived state and filtering
- Persisting state with localStorage
- Custom types and prop typing in TypeScript
- MUI theming and component overrides

## Planned

- Inline task editing
- Active task counter
- Task categories
