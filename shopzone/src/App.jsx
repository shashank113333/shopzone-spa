import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const { cart } = useContext(CartContext);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Logged out!');
    window.location.reload(); 
  };

  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        
        <Link to="/cart" style={{ color: 'orange', textDecoration: 'none', marginLeft: 'auto', fontWeight: 'bold' }}>
          🛒 Cart ({cart.length})
        </Link>

        {localStorage.getItem('isLoggedIn') === 'true' ? (
           <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', marginLeft: '15px' }}>Logout</button>
        ) : (
           <Link to="/login" style={{ color: 'lightblue', textDecoration: 'none', marginLeft: '15px' }}>Login</Link>
        )}
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;