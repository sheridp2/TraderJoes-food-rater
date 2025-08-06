import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useUserStore } from "../store.ts"

export default function Header() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const toggleIsLoggedIn = useUserStore((state) => state.toggleIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trader Joes Food Rater
          </Typography>
          <Button color="inherit" onClick={toggleIsLoggedIn}>{isLoggedIn ? "Log out":"Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
