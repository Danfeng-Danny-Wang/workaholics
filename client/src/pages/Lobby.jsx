import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";

import ChatroomList from "../components/ChatroomList/ChatroomList";

export default function Lobby() {
  return (
    <Fragment>
      <Container>
        <Paper elevation={16}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            maxWidth={350}
            alignItems={"center"}
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
          >
            <Typography sx={{ marginBottom: 2, marginTop: 2 }} variant="h5">
              Company Lobby
            </Typography>

            <ChatroomList />
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
