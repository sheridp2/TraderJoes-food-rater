import { useContext } from "react";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";

export default function Header() {
    const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Succcessfully logged out");
    localStorage.clear();
    clearUser();
    navigate("/dashboard");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trader Joes Food Rater
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user && `Welcome back, ${user?.fullName}` }
            
          </Typography>
            {user ? <Button onClick={handleLogout} color="red">Logout </Button>: <Button color="inherit"><Link to="/login">Login</Link></Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
