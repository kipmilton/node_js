import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thankyou-container">
      <h1>Thank You!</h1>
      <p>Hi, Sophia Njeri here! This is my submission. Hope to hear from you soon, Thank you.</p>
      <p>Feel free to view my profile below.</p>
      <Link to="/profile" className="profile-link">VIEW MY PROFILE</Link>
    </div>
  );
}

export default ThankYou;
