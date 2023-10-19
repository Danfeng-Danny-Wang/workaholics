import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  FormControl,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { chatMessageDto } from "../../model/ChatMessageDto";
import ChatWindowHeader from "./ChatWindowHeader";
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'

function ChatWindow() {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  let timeStamp = "";
  const [userData, setUserData] = useState({});
  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data?.user) {
      setUserData(data.user);
    }
  }, [data]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTimeStamp = () => {
    timeStamp = new Date().toDateString();
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      handleTimeStamp();
      setChatMessages([
        ...chatMessages,
        new chatMessageDto(userData.username, message, timeStamp),
      ]);
      setMessage("");
    }
  };

  const listChatMessages = chatMessages.map((chatMessageDto, index) => (
    <ListItem key={index} dense>
      <ListItemText >{`${chatMessageDto.user}: ${chatMessageDto.message}`}</ListItemText>
      <ListItemText ></ListItemText>
      <ListItemText >{`${chatMessageDto.timeStamp}`}</ListItemText>
    </ListItem>
  ));

  return (
    <>
      <Box p={3}>
        <Grid container spacing={1} alignItems="center">
          <ChatWindowHeader/>
        </Grid>
          <form onSubmit={sendMessage}>
          <Grid container spacing={1} alignItems="center">
            <Grid id="chat-window" xs={12} item>
              <List id="chat-window-messages">{listChatMessages}</List>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <TextField
                  onChange={handleMessageChange}
                  value={message}
                  label="Type your message..."
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid xs={1} item>
              <Button
                sx={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderRadius: "25px",
                }}
                type="submit"
                aria-label="send"
                color="success"
                variant="contained"
              >
                <SendIcon />
              </Button>
            </Grid>
          
        </Grid>
        </form>
      </Box>
    
    </>
  );
}

export default ChatWindow;
