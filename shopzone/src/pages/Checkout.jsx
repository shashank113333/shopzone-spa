import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePayNow = (e) => {
    e.preventDefault();
    clearCart(); 
    setIsPaid(true);
  };

  const handleContinueShopping = () => {
    navigate('/shop'); 
  };

  if (isPaid) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 20px', maxWidth: '600px', margin: 'auto', background: '#222', borderRadius: '10px', marginTop: '40px', border: '1px solid #333' }}>
        <h1 style={{ color: '#4ade80', fontSize: '36px', marginBottom: '15px' }}>🎉 Purchase Successful!</h1>
        <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.6' }}>
          Thank you for your order! Your demo payment was processed successfully.
        </p>
        <p style={{ color: '#f59e0b', fontWeight: 'bold', marginTop: '10px' }}>
          Order ID: #SZ-{Math.floor(100000 + Math.random() * 900000)}
        </p>

        <div style={{ marginTop: '30px' }}>
          <button 
            onClick={handleContinueShopping}
            style={{ 
              background: '#f59e0b', 
              color: '#000', 
              padding: '12px 26px', 
              border: 'none',
              borderRadius: '6px', 
              fontWeight: 'bold', 
              fontSize: '16px',
              cursor: 'pointer' 
            }}
          >
            Continue Shopping 🛍️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '30px', background: '#222', borderRadius: '10px', color: '#fff', border: '1px solid #333' }}>
      <h1 style={{ textAlign: 'center', color: '#f59e0b', marginBottom: '20px' }}>Checkout 💳</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', background: '#333', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Order Summary</h3>
        <p style={{ margin: '5px 0', color: '#aaa' }}>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
        <p style={{ margin: '5px 0', fontSize: '20px', fontWeight: 'bold', color: '#4ade80' }}>
          Total to Pay: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <form onSubmit={handlePayNow} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', background: '#111', color: '#fff' }} 
        />
        <input 
          type="text" 
          placeholder="Delivery Address" 
          required 
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', background: '#111', color: '#fff' }} 
        />
        <input 
          type="text" 
          placeholder="Card Number (Demo: 4242...)" 
          required 
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', background: '#111', color: '#fff' }} 
        />

        <button 
          type="submit" 
          style={{ 
            background: '#16a34a', 
            color: '#fff', 
            padding: '14px', 
            border: 'none', 
            borderRadius: '6px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Pay Now (${totalPrice.toFixed(2)}) 🚀
        </button>
      </form>
    </div>
  );
}

export default Checkout;