import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Login() {
  const { login } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login(); 
    alert('Logged in as Guest!');
    navigate('/checkout');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center', padding: '40px 20px', background: '#222', borderRadius: '10px', marginTop: '40px', border: '1px solid #333' }}>
      <h1 style={{ color: '#f59e0b', marginBottom: '15px' }}>Login</h1>
      <p style={{ color: '#ccc', marginBottom: '30px' }}>Please login to access your checkout.</p>
      
      <button 
        onClick={handleGuestLogin}
        style={{ 
          background: '#16a34a', 
          color: 'white', 
          padding: '12px 24px', 
          border: 'none', 
          borderRadius: '6px', 
          fontSize: '16px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Login as Guest 👤
      </button>
    </div>
  );
}

export default Login;