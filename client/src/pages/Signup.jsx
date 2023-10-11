import { Container, Paper } from "@mui/material";

import { Fragment } from "react";

import SignupForm from "../components/SignupForm/SignupForm";

export default function Signup() {

  return (
    <Fragment>
      <Container>
        <Paper elevation={24}>
          <SignupForm />
        </Paper>
      </Container>
    </Fragment>
  );
}
