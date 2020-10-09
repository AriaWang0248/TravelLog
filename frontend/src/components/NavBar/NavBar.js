import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { AppBar, Toolbar, Button,Avatar } from "@material-ui/core";

function NavBar(props) {
  return (
    <div className='navbar'>
      <AppBar position="fixed">
        <Toolbar>
          <div className='btn-container' edge='start'>
            <Button>
              <Link className="link" to="/">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="link" to="/login">
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="link" to="/register">
                Register
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="link" to="/explore">
                Explore
              </Link>
            </Button>
          </div>
          
          <Link to='/profile'><Avatar className='avatar' src='/broken-image.jpg'></Avatar></Link>
        </Toolbar>
        
      </AppBar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
        <li>
          <Link to="explore">Explore</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default NavBar;
