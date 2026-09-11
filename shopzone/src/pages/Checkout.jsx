import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [paid, setPaid] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    alert("Processing Dummy Payment...");
    clearCart();
    setPaid(true);
  };

  if (paid) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1 style={{ color: 'green', fontSize: '40px' }}>✅ Order Placed Successfully!</h1>
        <h2>Thank you for shopping at ShopZone.</h2>
        <Link to="/shop" style={{ color: 'lightblue', textDecoration: 'none', fontSize: '18px' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: 'auto', background: '#222', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Checkout</h1>
      <hr />
      <h3>Order Summary:</h3>
      <p>Total Items: {cart.length}</p>
      <h2>Amount to Pay: <span style={{ color: 'orange' }}>${totalPrice.toFixed(2)}</span></h2>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={handlePayment} style={{ padding: '15px 30px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}>
          Pay Now (Dummy)
        </button>
      </div>
    </div>
  );
}

export default Checkout;