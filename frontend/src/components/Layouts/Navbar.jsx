import { useContext } from "react";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import { UserContext } from "../../context/userContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trader Joes Food Rater
          </Typography>
          <Button color="inherit">
            {user ? <Link to="/login">Logout</Link> : <Link to="/login">Login</Link>}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
