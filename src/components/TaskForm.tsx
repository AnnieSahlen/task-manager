import { Button, Stack, TextField } from "@mui/material";
import { useState, useRef } from "react";

type TaskFormProps = {
  onAddTask: (task: string) => void;
};

function TaskForm({ onAddTask }: TaskFormProps) {
  const [listItem, setListItem] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!listItem.trim()) return;

    onAddTask(listItem);
    setListItem("");
    inputRef.current?.focus();
  };

  return (
    <Stack
      spacing={2}
      direction={"row"}
      component="form"
      onSubmit={handleSubmit}>
      <TextField
        inputRef={inputRef}
        value={listItem}
        onChange={(event) => {
          setListItem(event.target.value);
        }}
        size="small"
        placeholder="Add a task..."></TextField>
      <Button
        disabled={!listItem.trim()}
        type="submit"
        variant="contained"
        size="small"
        sx={{
          px: 2,
        }}>
        Add task
      </Button>
    </Stack>
  );
}

export default TaskForm;
