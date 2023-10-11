import { Container, Paper } from "@mui/material";

// import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Fragment } from "react";

import SignupForm from "../components/SignupForm/SignupForm";

export default function Signup() {
  // const [company, setCompany] = useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setCompany(event.target.value);
  // };

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
