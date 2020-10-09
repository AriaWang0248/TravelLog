import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";

function Login(props) {
  const [user, setUser] = useState({});
  return (
    <div>
      <h1>Login</h1>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoFocus
        ></TextField>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          id="password"
          type="password"
          label="Password"
          // autoComplete="current-password"
        ></TextField>

        <Button
          className="submit-btn"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
      </form>
      <p>
        Not a member? <Link to="/register">Join now</Link>
      </p>
    </div>
  );
}

export default Login;
