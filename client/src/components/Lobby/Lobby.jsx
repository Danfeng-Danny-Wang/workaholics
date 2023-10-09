import { 
  Button,
  Container, 
  Paper, 
  Typography} from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Lobby() {

  return (
    <Fragment>
      <Container>
        <Paper elevation={16}>
          <Box 
            display={'flex'}
            flexDirection={'column'}
            maxWidth={350}
            alignItems={'center'}
            justifyContent={'center'}
            margin='auto'
            marginTop={5}
            padding={3}>
            <Typography 
              sx={{ marginBottom: 2, marginTop: 2}} 
              variant='h5'>
                Company Lobby
            </Typography>
        
            <Link to='/ChatBox'>
              <Button 
                style={{
                  backgroundColor: "#5C76B7",
                  padding: "10px 100px",
                  fontSize: "18px"
                }}
                sx={{ marginBottom: 1, marginTop: 1}}
                variant='contained'>
                  Room 1
              </Button>
            </Link>

            <Link to='/ChatBox'>
              <Button 
                style={{
                  backgroundColor: "#5DBA40",
                  padding: "10px 100px",
                  fontSize: "18px"
                }}
                sx={{ marginBottom: 1, marginTop: 1}}
                variant='contained'>
                  Room 1
              </Button>
            </Link>

            <Link to='/ChatBox'>
              <Button 
                style={{
                  backgroundColor: "#ffea00",
                  padding: "10px 100px",
                  fontSize: "18px"
                }}
                sx={{ marginBottom: 1, marginTop: 1}}
                variant='contained'>
                  Room 1
              </Button>
            </Link>

            <Link to='/ChatBox'>
              <Button 
                style={{
                  backgroundColor: "#e53935",
                  padding: "10px 100px",
                  fontSize: "18px"
                }}
                sx={{ marginBottom: 1, marginTop: 1}}
                variant='contained'>
                  Room 1
              </Button>
            </Link>
          </Box>
          </Paper>
      </Container>
    </Fragment>
  );
}