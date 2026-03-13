import { useEffect, useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import { Button, Paper, Stack, Typography } from "@mui/material";
import type { Task } from "./types/Task";
import type { FilterType } from "./types/FilterType";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (!storedTasks) return [];

    try {
      return JSON.parse(storedTasks);
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const hasCompleted = tasks.some((task) => task.completed);

  return (
    <>
      <Stack pt={8} alignItems={"center"}>
        {" "}
        <Typography component="h1" variant="h1" fontSize={48} letterSpacing={1}>
          Task Manager
        </Typography>
      </Stack>
      <Stack
        spacing={3}
        sx={{
          alignItems: "flex-start",
          maxWidth: 400,
          margin: "80px auto",
        }}>
        <TaskForm onAddTask={addTask} />
        <Filter filter={filter} setFilter={setFilter}></Filter>

        <Paper
          sx={{
            border: "1px solid #e6e6e6",
            width: "100%",
          }}>
          <TaskList
            onDelete={deleteTask}
            onToggle={toggleTask}
            tasks={filteredTasks}
          />
          {hasCompleted && (
            <Stack direction={"row"} justifyContent={"flex-end"} padding={1.5}>
              <Button
                onClick={clearCompleted}
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  fontSize: 12,
                  color: "text.secondary",
                  "&:hover": {
                    color: "error.main",
                    backgroundColor: "transparent",
                  },
                }}>
                Clear completed
              </Button>
            </Stack>
          )}
        </Paper>
      </Stack>
    </>
  );
}

export default App;
