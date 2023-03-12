import React from 'react'
import {Link} from 'react-router-dom'


 function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/Experience">
        <div>Experience</div>
      </Link>
      <Link to="/Education">
        <div>Education</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
    </div>
  );
};
export default Nav