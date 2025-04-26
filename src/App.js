import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThankYou from './ThankYou';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThankYou />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
