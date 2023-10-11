import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Link } from "react-router-dom";
// import Auth from '../utils/auth';

export default function Header() {
  return (
    <Fragment>
      <Box mb={10}>
        <AppBar postition="static" color="success" elevation={12}>
          <Toolbar>
            <Typography variant="h6">Work-A-holics</Typography>
            {/* {Auth.loggedIn() ? ( */}
              <Link to="/">
                <Button
                  sx={{ marginLeft: 5, borderRadius: 2 }}
                  variant="contained"
                  color="secondary"
                >
                  Logout
                </Button>
              </Link>
            {/* ): (<></>)} */}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
