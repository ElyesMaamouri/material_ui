import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    "&.MuiButton-root:hover": {
      fontSize: 50,
      backgroundColor: "violet",
      cursor: "pointer",
    },
  },
  filed: {
    "&.MuiFormControl-root": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },
});
// validation functions
// const required = (value) => (value == null ? "Required" : undefined);
// const email = (value) =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? "Invalid email"
//     : undefined;

export default function Create() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPassword(false);
    setPasswordConfirmError(false);
    setFormValid(false);
    if (name == "") {
      setNameError(true);
    }
    if (
      (email == "") != email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setEmailError(true);
    }

    if (password == "" || password.length < 8) {
      setPasswordError(true);
    }
    if (confirmPassword == "" || confirmPassword.length < 8) {
      setPasswordConfirmError(true);
    } else if (password.localeCompare(confirmPassword) == 0) {
      setPasswordConfirmError(false);
    }
  };
  return (
    <div className={classes.container}>
      {/* <Typography variant="h1" color="primary" align="center">
        Hello MUI
      </Typography> */}

      {/* <Typography noWrap color="secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography> */}
      <Typography variant="h6" component="h2" gutterBottom color="primary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </Typography>
      <Button className={classes.btn} type="submit">
        Submit 120
      </Button>

      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      <form noValidate autoComplete="off" onSubmit={handelSubmit}>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={classes.filed}
          label="Name"
          variant="outlined"
          color="secondary"
          error={nameError}
          required
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={classes.filed}
          label="Email"
          variant="outlined"
          color="secondary"
          required
          placeholder="email@eamil.com"
          multiline
          fullWidth
          error={emailError}
          helperText={emailError ? "Invalid email" : " "}
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={classes.filed}
          label="Password"
          variant="outlined"
          color="secondary"
          required
          placeholder="Enter password"
          multiline
          fullWidth
          error={passwordError}
          helperText={passwordError ? "Min length 8 caratetre" : " "}
        />

        <TextField
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          className={classes.filed}
          label="Confirm password "
          variant="outlined"
          color="secondary"
          required
          placeholder="Confirm password"
          multiline
          fullWidth
          error={confirmPasswordError}
          helperText={confirmPasswordError ? "Dont the same pass" : " "}
        />
        <TextField
          id="raised-button-file"
          multiple
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={(e) => {
            setFile(e.target.files[0]);
            console.log(file);
          }}
        />

        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}
