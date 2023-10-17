import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './index.css';

function App() {



  return (
    <Router>
      <div className="app">

        <Routes>
         <Route path="/login"  element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
