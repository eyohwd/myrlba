import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    
      <div style={{height: "90vh", padding :"150px 60px",}}>
        <div className="">
          <h2>Permission Denied.</h2>
          <p>This page can only be viewed by an admin user.</p>
          <br />
          <Link to="/">
          <button className="--btn">&larr; Back to Home</button>
          </Link>
        </div>
      </div>
    
  );
}

export default NotFound;
