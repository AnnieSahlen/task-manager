import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import type { Task } from "../types/Task";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <>
      {tasks.length === 0 ? (
        <Stack alignItems={"center"} sx={{ p: 6, color: "#888" }}>
          <Typography variant="h6">No tasks yet</Typography>

          <Typography variant="body2">Add your first task above</Typography>
        </Stack>
      ) : (
        <List sx={{ p: 2 }}>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              sx={{
                bgcolor: "#eeeae488",
                borderRadius: 2,
                marginBottom: 1,
                maxWidth: 400,
                transition: "background-color 0.15s ease",
                "&:hover": {
                  bgcolor: "#e4dfd988",
                },
              }}>
              <Checkbox
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <ListItemText
                primary={task.text}
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              />
              <IconButton onClick={() => onDelete(task.id)}>
                <ClearOutlinedIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default TaskList;
