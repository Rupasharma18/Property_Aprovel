import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "130px",
   
  },
card:{
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  borderRadius:'5%'
},

  
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [useDeatil, setUserDeatil] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    citizen: "",
    otp: "",
  });

  const handleChange = (event) => {
    setUserDeatil({ ...useDeatil, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(useDeatil, "----");
    e.preventDefault();
    await axios
      .post("http://localhost:4000/newuser", useDeatil)
      .then((res) => {
        console.log(res, "respones");
        props.history.push('/login')

        if(res.data.citizen == "no"){
          props.history.push('/admin')
        }
      })
      .catch((err) => {
        console.log(err, "errorr");
      });
  };
 
  return (
    
    <Container component="main" maxWidth="xs" className={classes.card}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            name="userName"
            autoComplete="username"
            autoFocus
            defaultValue={useDeatil.userName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
            defaultValue={useDeatil.userEmail}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            pattern="^\d{4}-\d{3}-\d{4}$" required 
            name="userPhone"
            label="Phone Number"
            type="phone"
            autoComplete="phoneNumber"
            onChange={handleChange}
            defaultValue={useDeatil.userPhone}
          />



        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label=" Are you citizen?"
            name="citizen"
            autoComplete="citizen"
            autoFocus
            defaultValue={useDeatil.citizen}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="OTP"
            name="otp"
            autoComplete="OTP"
            autoFocus
            defaultValue={useDeatil.otp}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Typography gutterBottom variant="p" component="p" style={{textAlign:'center'}}>
            Already have Account &nbsp;
          <Link to="/login">
          login
          </Link>
      </Typography>
        </form>
      </div>
    </Container>
  );
}
