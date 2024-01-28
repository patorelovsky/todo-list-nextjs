"use client";

import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Task } from "@prisma/client";
import { ChangeEvent } from "react";

type props = Task & {
  updateTask: (task: Partial<Task>) => Promise<void>;
};

export default function TaskCheckbox({
  id,
  completed,
  content,
  updateTask,
}: props) {
  const handleCheckboxChange = async (e: ChangeEvent<HTMLInputElement>) => {
    completed = Boolean(e.target.value);
    await updateTask({ id, completed });
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox checked={completed} onChange={handleCheckboxChange} />
        }
        label={content}
      />
    </Box>
  );
}
