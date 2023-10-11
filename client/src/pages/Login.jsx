import {
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const handleFormSubmit = () => {};

  return (
    <Fragment>
      <Container>
        <Paper elevation={16}>
          <form onSubmit={handleFormSubmit}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              maxWidth={400}
              alignItems={"center"}
              justifyContent={"center"}
              margin="auto"
              marginTop={5}
              padding={3}
            >
              <Typography variant="h5">Login</Typography>

              <FormControl fullWidth>
                <TextField
                  name="username"
                  margin="normal"
                  type="text"
                  label="Username"
                  variant="outlined"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  name="password"
                  margin="normal"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
              </FormControl>

              <Link to="/Lobby">
                <Button
                  sx={{ marginTop: 2, borderRadius: 2 }}
                  type="submit"
                  variant="contained"
                  color="warning"
                >
                  Login
                </Button>
              </Link>

              <Link to="/Signup">
                <Button
                  sx={{ marginTop: 2, borderRadius: 2 }}
                  color="primary"
                  variant="contained"
                >
                  Go to Signup
                </Button>
              </Link>
            </Box>
          </form>
        </Paper>
      </Container>
    </Fragment>
  );
}
