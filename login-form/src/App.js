import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './index.css';

function App() {

  const[showSignUpLink,setShowSignUpLink] = useState(false);

  useEffect(() => {
    setShowSignUpLink(window.location.pathname === '/login');
  }, [])


  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>

       {showSignUpLink && (
          <p>You don't have an account yet? <Link to="/signup">Sign Up</Link></p>
        )}
      </div>
    </Router>
  );
}

export default App;
