import { Grid, Typography, Divider } from "@mui/material";
import LinkButton from "../LinkButton/LinkButton";

function ChatWindowHeader() {



  return (
    <>
      <Grid id="chat-header" xs={9} item>
        <Typography variant="h6">Chatroom</Typography>
      </Grid>
      <Grid id="chat-header" xs={1} item>
        <LinkButton url="/Lobby" variant="outlined" color="secondary">
          Lobby
        </LinkButton>
      </Grid>
      <Grid id="chat-header" xs={12} item>
        <Divider />
      </Grid>
    </>
  );
}

export default ChatWindowHeader;
