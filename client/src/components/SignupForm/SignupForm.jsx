import {
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

function SignupForm() {
  function handleFormSubmit() {}

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
          <InputLabel id="company-options">Company</InputLabel>
          <Select
            labelId="companies-options-label"
            id="companies-option"
            // value={company}
            label="Company"
            size="medium"
            variant="outlined"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Company 1"}>Company 1</MenuItem>
            <MenuItem value={"Company 2"}>Company 2</MenuItem>
            <MenuItem value={"Company 3"}>Company 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            name="companyCode"
            size="small"
            type="text"
            label="Company Code"
            variant="outlined"
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
          />
        </FormControl>

        <LinkButton
          url="/Lobby"
          sx={{ marginTop: 1, borderRadius: 2 }}
          variant="contained"
          color="warning"
          type="submit"
        >
          Signup
        </LinkButton>

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
