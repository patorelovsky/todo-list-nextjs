import {
  AppBar as MUIAppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Link from "next/link";

export default function AppBar() {
  return (
    <MUIAppBar position="sticky">
      <Toolbar>
        <FormatListBulletedIcon sx={{ mr: 1 }} />
        <Typography variant="h6" color="inherit" component="div">
          Todo list
        </Typography>
        <Button sx={{ ml: "auto" }}>
          <Link href="/new">New</Link>
        </Button>
      </Toolbar>
    </MUIAppBar>
  );
}
