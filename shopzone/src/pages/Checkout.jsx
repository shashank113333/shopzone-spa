import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'cod'
  });
  const [isPaid, setIsPaid] = useState(false);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handlePay = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.address.trim()) {
      alert('Please fill in your shipping details!');
      return;
    }
    if (clearCart) clearCart();
    setIsPaid(true);
  };
  if (isPaid) {
    return (
      <div style={{
        maxWidth: '550px',
        margin: '60px auto',
        padding: '40px 30px',
        textAlign: 'center',
        background: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: '65px', marginBottom: '15px' }}>🎉</div>
        <h2 style={{ color: '#27ae60', fontSize: '26px', marginBottom: '10px' }}>Order Placed Successfully!</h2>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '25px' }}>
          Thank you, <strong>{formData.name}</strong>! Your order has been received and will be delivered soon.
        </p>

        <button
          type="button"
          onClick={() => navigate('/shop')}
          style={{
            padding: '12px 30px',
            backgroundColor: '#007bff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,123,255,0.25)'
          }}
        >
          Continue Shopping 🛍️
        </button>
      </div>
    );
  }

  // 2. Agar Cart Empty hai
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>Your Cart is Empty! 🛒</h2>
        <p style={{ color: '#666', margin: '15px 0' }}>Please add some items from the shop first.</p>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          style={{
            padding: '10px 24px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Go to Shop
        </button>
      </div>
    );
  }

  // 3. Checkout Form
  return (
    <div style={{
      maxWidth: '650px',
      margin: '40px auto',
      padding: '30px',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
    }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '12px', marginBottom: '20px', color: '#222' }}>
        Checkout 💳
      </h2>
      
      {/* Order Summary */}
      <div style={{ marginBottom: '25px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#444' }}>Order Summary</h4>
        <p style={{ margin: '4px 0', color: '#555' }}>
          Total Items: <strong>{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</strong>
        </p>
        <p style={{ margin: '4px 0', fontSize: '18px', color: '#333' }}>
          Total Amount: <strong style={{ color: '#e67e22' }}>${totalAmount.toFixed(2)}</strong>
        </p>
      </div>

      <form onSubmit={handlePay}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#444' }}>
            Full Name:
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Shashank Vishwakarma"
            style={{ width: '100%', padding: '11px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#444' }}>
            Delivery Address:
          </label>
          <textarea
            required
            rows="3"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Enter your complete delivery address..."
            style={{ width: '100%', padding: '11px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#444' }}>
            Payment Method:
          </label>
          <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            style={{ width: '100%', padding: '11px', borderRadius: '6px', border: '1px solid #ccc' }}
          >
            <option value="cod">Cash on Delivery (COD)</option>
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI / Net Banking</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(40,167,69,0.3)'
          }}
        >
          Pay Now (${totalAmount.toFixed(2)}) 🚀
        </button>
      </form>
    </div>
  );
}

export default Checkout;