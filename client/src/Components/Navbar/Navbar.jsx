import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <AppBar position="static" sx={{ margin: 0, padding: 0 }}>
        <Toolbar sx={{ margin: 0, padding: 0 }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            Aleph
          </Typography>
          <div>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar alt="Aleph Logo" src="https://avatars.githubusercontent.com/u/99921915?s=200&v=4" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
