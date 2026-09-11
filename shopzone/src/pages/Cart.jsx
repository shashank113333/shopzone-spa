import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={{ marginTop: '30px' }}>
          <h2>Your cart is empty! 😔</h2>
          <Link to="/shop" style={{ color: 'orange', textDecoration: 'none', fontSize: '18px' }}>
            Go to Shop to buy something
          </Link>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#222', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p style={{ color: '#4caf50', fontWeight: 'bold' }}>${item.price}</p>
                <p style={{ color: 'lightblue' }}>Quantity: {item.quantity}</p> 
              </div>
            </div>
          ))}

          <div style={{ marginTop: '30px', padding: '20px', background: '#333', borderRadius: '8px', textAlign: 'right' }}>
            <h2>Total Amount: <span style={{ color: 'orange' }}>${totalPrice.toFixed(2)}</span></h2>
            <Link to="/checkout">
              <button style={{ padding: '12px 24px', fontSize: '18px', cursor: 'pointer', marginTop: '15px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;