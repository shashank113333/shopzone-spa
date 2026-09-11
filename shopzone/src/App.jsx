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
  const { isLoggedIn } = useContext(CartContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const { cart, isLoggedIn, logout } = useContext(CartContext);

  const handleLogout = () => {
    logout();
    alert('Logged out successfully!');
  };

  return (
    <BrowserRouter>
      <nav style={{ 
        padding: '12px 20px', 
        background: '#333', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Shop</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/cart" style={{ color: 'orange', textDecoration: 'none', fontWeight: 'bold' }}>
            🛒 Cart ({cart.length})
          </Link>

          {isLoggedIn ? (
             <button onClick={handleLogout} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 14px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>Logout</button>
          ) : (
             <Link to="/login" style={{ color: 'lightblue', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
          )}
        </div>
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