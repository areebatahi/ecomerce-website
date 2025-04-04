import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Update from './pages/Update'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/admin" element={<AdminPages />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path='/product' element={<Product/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
