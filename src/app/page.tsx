import { Box } from "@mui/material";
import { Task } from "@prisma/client";
import AppBar from "./components/AppBar";
import TaskCheckbox from "./components/TaskCheckbox";
import prisma from "./prisma";

async function readTasks() {
  "use server";
  return await prisma.task.findMany();
}

async function updateTask({ id, completed, content }: Partial<Task>) {
  "use server";
  await prisma.task.update({ data: { content, completed }, where: { id } });
}

export default async function Home() {
  const todoList = await readTasks();

  return (
    <Box>
      <AppBar />
      <Box sx={{ m: 2 }}>
        {todoList.map((task) => (
          <TaskCheckbox key={task.id} {...task} updateTask={updateTask} />
        ))}
      </Box>
    </Box>
  );
}
