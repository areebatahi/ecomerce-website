
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/LoginPage';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Logout from './Pages/Logout';
import AdminPage from './Pages/AdminPage';
import ProductsPage from './components/Products';
import Profile from './Pages/Profile';
import Update from './Pages/Update';


const App = () => {
  const location = useLocation();
  const adminPage = location.pathname === '/admin';
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
   
      {!adminPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/logout" element={<Logout />}/>
        <Route path="/admin" element={<AdminPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      {!adminPage && <Footer />}
    </>
  );
};

export default App;