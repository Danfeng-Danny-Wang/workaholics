import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import LinkButton from "../LinkButton/LinkButton";
import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from "../../utils/mutations";
// import { QUERY_COMPANIES } from '../../utils/queries';

function SignupForm() {
  const [addUser] = useMutation(ADD_USER);
  const [companyState, setCompanyState] = useState();
  // const [companyData, setCompanyData] = useState();
  // const { loading, data } = useQuery(QUERY_COMPANIES);

  // useEffect(() => {
  //     setCompanyData(data);
  // }, [data]);

  // console.log(`from query ${data}`);
  // console.log(`useEffect ${companyData}`);

  const [formState, setFormState] = useState(
    {
      companyCode: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // TODO: check company code for verification const userCompany = await getCompany()
    // set up a separate function or helper to verify company code
    // if (companyCode !== userCompany.code) {
    //  throw error
    // }

    const response = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        username: formState.username,
        email: formState.email,
        password: formState.password,
        company: companyState,
      },
    });
    const token = response.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleMenuChange = (event) => {
    event.preventDefault();
    setCompanyState(event.target.value);
    console.log(`from click ${companyState}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
        <Typography variant="h5" marginBottom={1}>
          Sign Up
        </Typography>

        <FormControl fullWidth>
        <InputLabel id="company-options">Select Company</InputLabel>
          <Select 
            labelId="company-options-label"
            id="company-option"
            label="Select Company"
            size="medium"
            variant="outlined"
            onChange={handleMenuChange}>
            {/* {companyData !== null ? companyData.companies.map((company) => {
              <MenuItem value={company.name}>{company.name}</MenuItem>
            }) : null} */}
            <MenuItem value={"Company1"}>Company 1</MenuItem>
            <MenuItem value={"Company2"}>Company 2</MenuItem>
            <MenuItem value={"Company3"}>Company 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            name="companyCode"
            size="small"
            type="text"
            label="Company Code"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <Divider sx={{ m: 1, minWidth: 350 }} />

        <FormControl fullWidth>
          <TextField
            name="firstName"
            margin="dense"
            size="small"
            type="text"
            label="First Name"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="lastName"
            margin="dense"
            size="small"
            type="text"
            label="Last Name"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="username"
            margin="dense"
            size="small"
            type="text"
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="email"
            margin="dense"
            size="small"
            type="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="password"
            margin="dense"
            size="small"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <Button
          // url="/Lobby"
          sx={{ marginTop: 1, borderRadius: 2 }}
          variant="contained"
          color="warning"
          type="submit"
        >
          Signup
        </Button>

        <LinkButton
          url="/"
          sx={{ marginTop: 1, borderRadius: 2 }}
          variant="contained"
          color="primary"
        >
          Go to Login
        </LinkButton>
      </Box>
    </form>
  );
}

export default SignupForm;
