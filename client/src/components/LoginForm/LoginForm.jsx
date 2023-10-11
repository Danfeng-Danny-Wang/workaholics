import { Box, Typography, FormControl, TextField } from "@mui/material";

import LinkButton from "../LinkButton/LinkButton";

function LoginForm() {
  function handleFormSubmit() {}

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

        <LinkButton
          url="/Lobby"
          sx={{ marginTop: 2, borderRadius: 2 }}
          variant="contained"
          color="warning"
          type="submit"
        >
          Login
        </LinkButton>

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
