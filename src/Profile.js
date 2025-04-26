import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <img src="/profilepic.jpg" alt="Profile" className="profile-pic" />
      <h2>Sophia Njeri</h2>
      <p>I am a passionate software engineer who loves building beautiful, functional websites and web apps. I enjoy solving real-world problems with code and always aim to learn and grow in the tech world!</p>
    </div>
  );
}

export default Profile;
