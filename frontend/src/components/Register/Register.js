import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";
import axios from 'axios'



function Register() {
  const [user, setUser] = useState({email:'',password:''});

  const onChangeEmail=(e)=>{
    setUser({...user,'email':e.target.value})
}
  const onSubmit=(e)=>{
    e.preventDefault();
    //new user object
    const newuser = {
        email:user.email,
        password:user.password
    }
    console.log(newuser)
    axios.post('http://localhost:5000/users/add', newuser)
        .then(res => console.log(res.data));
    setUser({email:'',password:''})
}
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoFocus
          onChange={onChangeEmail}
        ></TextField>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
        ></TextField>

        <Button
          className="submit-btn"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </form>
      <p>
        Already a member? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
}

export default Register;
