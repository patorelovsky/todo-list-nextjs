import { Box, Button, TextField } from "@mui/material";
import prisma from "../prisma";
import { redirect } from "next/navigation";

async function createTask(formData: FormData) {
  "use server";
  const content = formData.get("content")?.valueOf();
  if (content == null || typeof content !== "string") {
    throw Error("Content cannot be empty!");
  }
  await prisma.task.create({
    data: {
      content,
    },
  });
  redirect("/");
}

export default function New() {
  return (
    <Box sx={{ m: 2 }}>
      <form action={createTask}>
        <TextField label="Content" name="content" />
        <Box sx={{ mt: 1, gap: 1 }}>
          <Button variant="contained" type="submit" sx={{ maxWidth: 5, mt: 1 }}>
            Save
          </Button>
          <Button variant="outlined" type="reset" sx={{ maxWidth: 5, mt: 1 }}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}
