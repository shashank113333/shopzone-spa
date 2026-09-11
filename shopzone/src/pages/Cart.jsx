import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
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
          {cart.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '15px', 
                background: '#222', 
                borderRadius: '8px', 
                marginBottom: '15px',
                border: '1px solid #333'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} 
                />
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#fff' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#4ade80', fontWeight: 'bold' }}>${item.price}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button 
                  onClick={() => decreaseQuantity(item.id)}
                  style={{ 
                    background: '#374151', 
                    color: '#fff', 
                    border: 'none', 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                  aria-label="Decrease quantity"
                >
                  -
                </button>

                <span style={{ fontSize: '16px', fontWeight: 'bold', minWidth: '24px', textAlign: 'center', color: '#fff' }}>
                  {item.quantity}
                </span>

                <button 
                  onClick={() => increaseQuantity(item.id)}
                  style={{ 
                    background: '#374151', 
                    color: '#fff', 
                    border: 'none', 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                  aria-label="Increase quantity"
                >
                  +
                </button>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ 
                    background: '#ef4444', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '6px 12px', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginLeft: '8px'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '30px', padding: '20px', background: '#222', borderRadius: '8px', textAlign: 'right', border: '1px solid #333' }}>
            <h2>Total Amount: <span style={{ color: '#f59e0b' }}>${totalPrice.toFixed(2)}</span></h2>
            <Link 
              to="/checkout" 
              style={{ 
                display: 'inline-block', 
                background: '#16a34a', 
                color: '#fff', 
                padding: '12px 24px', 
                textDecoration: 'none', 
                borderRadius: '6px', 
                fontSize: '18px', 
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;