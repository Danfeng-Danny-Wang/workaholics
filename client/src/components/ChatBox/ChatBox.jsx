import { 
  Button,
  Container, 
  Paper, 
  Grid, 
  List, 
  ListItem, 
  Typography, 
  Divider, 
  ListItemText, 
  FormControl, 
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { chatMessageDto } from '../../model/ChatMessageDto';
import './ChatBox.css';
import SendIcon from '@mui/icons-material/Send';

export default function ChatBox() {

  const [chatMessages, setChatMessages] = useState([]);
  //won't need useState for user once connected to db and server
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  let timeStamp = '';

  const handleUserChange = (event) => {
    setUser(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleTimeStamp = () => {
    timeStamp = new Date().toDateString();
  }

  const sendMessage = (event) => {
    event.preventDefault();
    if (user && message) {
      handleTimeStamp();
      console.log('Send!');
      console.log(timeStamp);
      setChatMessages([...chatMessages, new chatMessageDto(user, message, timeStamp)]);
      setMessage('');
    }
  }

  const listChatMessages = chatMessages.map((chatMessageDto, index) => (
    <ListItem  key={index}>
      <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}: (${chatMessageDto.timeStamp})`} />
    </ListItem>
  ));

  return (
    <Fragment>
      <Container>
        <Paper elevation={8}>
          <form onSubmit={sendMessage}>
          <Box p={3}>
            <Grid container spacing={1} alignItems='center'>
              <Grid id='chat-header' xs={9} item>
                <Typography variant='h6' >
                  {user} is in Chatroom 1
                </Typography>
              </Grid>
              <Grid id='chat-header' xs={1} item>
                <Link to='/Lobby'>
                  <Button 
                    color='warning'
                    variant='contained'>
                      Lobby
                  </Button>
                </Link>
              </Grid>
              <Grid id='chat-header' xs={12} item>
            <Divider />
            </Grid>

  {/* TODO: break this down to list each user, message, date with xs=2 xs=8 xs=2 */}
               <Grid id='chat-window' xs={12} item>
                <List id='chat-window-messages'>
                  {listChatMessages}
                </List>
               </Grid>
  {/* TODO: 3 grids with one element each, end the mapping here */}
               <Grid xs={0} item>
                  <FormControl fullWidth>
                    <TextField onChange={handleUserChange}
                      value={user}
                      label='Username'
                      variant='outlined'
                      fontSize='.5em'/>
                  </FormControl>
               </Grid>
               <Grid xs={10} item>
                <FormControl fullWidth>
                    <TextField onChange={handleMessageChange}
                      value={message}
                      label='Type your message...'
                      variant='outlined'/>
                  </FormControl>
               </Grid>
               <Grid xs={1} item>
                <Button
                  sx={{ 
                    maxWidth: '50px', 
                    maxHeight: '50px', 
                    minWidth: '50px', 
                    minHeight: '50px',
                    borderRadius: '25px',
                  }}
                  type='submit'
                  aria-label='send' 
                  color='success'
                  variant='contained'>
                    <SendIcon />
                </Button>
               </Grid>
            </Grid>
          </Box>
          </form>
        </Paper>
      </Container>
    </Fragment>
  );
}