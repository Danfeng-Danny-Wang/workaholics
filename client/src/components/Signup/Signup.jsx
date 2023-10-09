import { 
  Button,
  Container, 
  Divider, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Paper, 
  TextField, 
  Typography} from '@mui/material';
import Select from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  // const [company, setCompany] = useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setCompany(event.target.value);
  // };

  const handleFormSubmit = () => {
  }

  return (
    <Fragment>
      <Container>
        <Paper elevation={24}>
        <form onSubmit={handleFormSubmit}>
          <Box 
            display={'flex'}
            flexDirection={'column'}
            maxWidth={350}
            alignItems={'center'}
            justifyContent={'center'}
            margin='auto'
            marginTop={5}
            padding={3}>
            <Typography variant='h5' marginBottom={1}>Sign Up</Typography>

            <FormControl fullWidth>
              <InputLabel id="company-options">Company</InputLabel>
              <Select
                labelId="companies-options-label"
                id="companies-option"
                // value={company}
                label="Company"
                size='medium'
                variant='outlined'
                // onChange={handleChange}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Company 1'}>Company 1</MenuItem>
                <MenuItem value={'Company 2'}>Company 2</MenuItem>
                <MenuItem value={'Company 3'}>Company 3</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField 
                name='companyCode'
                size='small'
                type='text'
                label='Company Code'
                variant='outlined'/>
            </FormControl>

            <Divider sx={{ m: 1, minWidth: 350 }}/>

            <FormControl fullWidth>
              <TextField 
                name='firstName'
                margin='dense'
                size='small'
                type='text'
                label='First Name'
                variant='outlined'/>
            </FormControl>

            <FormControl fullWidth>
              <TextField 
                name='lastName'
                margin='dense'
                size='small'
                type='text'
                label='Last Name'
                variant='outlined'/>
            </FormControl>

            <FormControl fullWidth>
              <TextField 
                name='username'
                margin='dense'
                size='small'
                type='text'
                label='Username'
                variant='outlined'/>
            </FormControl>

            <FormControl fullWidth>
              <TextField 
                name='email'
                margin='dense'
                size='small'
                type='email'
                label='Email'
                variant='outlined'/>
            </FormControl>

            <FormControl fullWidth>
              <TextField 
                name='password'
                margin='dense'
                size='small'
                type='password'
                label='Password'
                variant='outlined'/>
            </FormControl>

            <Link to='/Lobby'>
              <Button 
                sx={{ marginTop: 1, borderRadius: 2}} 
                type='submit'
                variant='contained' 
                color='warning'>
                  Signup
              </Button>
            </Link>

            <Link to='/'>
              <Button 
                sx={{ marginTop: 1, borderRadius: 2}} 
                color='primary'
                variant='contained'>
                  Go to Login
              </Button>
            </Link>
          </Box>
        </form>
        </Paper>
      </Container>
    </Fragment>
  );
}