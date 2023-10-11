import { Container, Paper } from "@mui/material";

import { Fragment } from "react";

import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <Fragment>
      <Container>
        <Paper elevation={16}>
          <LoginForm />
        </Paper>
      </Container>
    </Fragment>
  );
}
