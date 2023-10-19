import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { QUERY_USER } from '../../utils/queries'


export default function Header() {
  const [userData, setUserData] = useState({});
  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data?.user) {
      setUserData(data.user);
    }
  }, [data]);

  const un = userData.username;

  function showLogout() {
    if (Auth.loggedIn()) {

      return (
        <>
          <Typography  sx={{ marginLeft: 2 }} variant="h6">
                Hello {un}
          </Typography>
          <Button
            sx={{ marginLeft: 2, borderRadius: 2 }}
            size="small"
            variant="contained"
            color="warning"
            onClick={() => Auth.logout()}
            ><strong>Logout</strong>
          </Button>
        </>
        );
    } else { return (<div></div>); }
  }

  return (
    <Fragment>
      <Box mb={10}>
        <AppBar postition="static" color="success" elevation={12}>
          <Toolbar
          
          >
            <Typography variant="h6">Work-A-holics</Typography>

              {showLogout()}

          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
