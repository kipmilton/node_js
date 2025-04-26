// import React from 'react';
// import './Profile.css';

// function Profile() {
//   return (
//     <div className="profile-container">
//       <img src="/profilepic.jpg" alt="Profile" className="profile-pic" />
//       <h2>Sophia Njeri</h2>
//       <p>I am a passionate software engineer who loves building beautiful, functional websites and web apps. I enjoy solving real-world problems with code and always aim to learn and grow in the tech world!</p>
//     </div>
//   );
// }

// export default Profile;

import React from 'react';
import { motion } from 'framer-motion';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <motion.img 
        src="/profilepic.jpg" 
        alt="Profile" 
        className="profile-pic"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Sophia Njeri
      </motion.h2>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I am a passionate software engineer who loves building beautiful, functional websites and web apps. I enjoy solving real-world problems with code and always aim to learn and grow in the tech world!
      </motion.p>

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="https://github.com/kipmilton" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="github-button">
           View My Linkedin Profile
        </a>
      </motion.div>
    </div>
  );
}

export default Profile;
