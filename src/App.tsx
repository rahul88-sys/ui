import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/signup';
import { Login } from './pages/login';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login status
    const storedLoginStatus = localStorage.getItem('isLoggedIn') || 'false';
    setIsLoggedIn(JSON.parse(storedLoginStatus));
  }, []);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            isLoggedIn ? (
              // Redirect to Home component for logged-in users
              <PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />
            ) : (
              // Display Home component for non-logged-in users
              <Home />
            )
          }
        />
        {/* <Route path="/home" element={<PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />} /> */}
        <Route path="/about" element={<PrivateRoute element={<About />} isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
