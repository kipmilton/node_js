// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ThankYou.css';

// function ThankYou() {
//   return (
//     <div className="thankyou-container">
//       <h1>Thank You!</h1>
//       <p>Hi, Sophia Njeri here! This is my submission. Hope to hear from you soon, Thank you.</p>
//       <p>Feel free to view my profile below.</p>
//       <Link to="/profile" className="profile-link">VIEW MY PROFILE</Link>
//     </div>
//   );
// }

// export default ThankYou;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thankyou-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Thank You!
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hey, Sophia here! I have drafted the thank you page as requested. Hope to hear from you soon.
      </motion.p>

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/profile" className="profile-link">VIEW MY PROFILE</Link>
      </motion.div>
    </div>
  );
}

export default ThankYou;
