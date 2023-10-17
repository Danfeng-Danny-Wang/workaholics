import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import LinkButton from "../LinkButton/LinkButton";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';

function LoginForm() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState(
    {
      username: '',
      password: '',
    }
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser({
        variables: { username: formState.username, password: formState.password },
      });
      const token = response.data.loginUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
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
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="password"
            margin="normal"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <Button
          // url="/Lobby"
          sx={{ marginTop: 2, borderRadius: 2 }}
          variant="contained"
          color="warning"
          type="submit"
        >
          Login
        </Button>

        <LinkButton
          url="/Signup"
          sx={{ marginTop: 2, borderRadius: 2 }}
          variant="contained"
          color="primary"
        >
          Go to Signup
        </LinkButton>
      </Box>
    </form>
  );
}

export default LoginForm;
