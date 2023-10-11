import { Container, Paper } from "@mui/material";

import { Fragment } from "react";

import "./ChatBox.css";
import ChatWindow from "../components/ChatWindow/ChatWindow";

export default function ChatBox() {
  return (
    <Fragment>
      <Container>
        <Paper elevation={8}>
          <ChatWindow />
        </Paper>
      </Container>
    </Fragment>
  );
}
