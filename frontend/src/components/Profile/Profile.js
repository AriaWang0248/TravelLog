import React, {useState} from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  const [isLogged,setLog] = useState(false)
  return (
    isLogged===true?
    <div>
    <h1>Profile</h1>
  </div> : <div>Not log in? <Link to='/login'>Login</Link></div>
    
  );
}

export default Profile;
