import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading Product Details...</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Link to="/shop" style={{ color: 'lightblue', textDecoration: 'none', fontSize: '18px' }}>← Back to Shop</Link>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', background: '#222', padding: '20px', borderRadius: '10px', flexWrap: 'wrap' }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }} />
        
        <div style={{ flex: 1 }}>
          <h2>{product.title}</h2>
          <h3 style={{ color: '#4caf50', fontSize: '24px' }}>${product.price}</h3>
          <p style={{ lineHeight: '1.6' }}>{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
          <button 
            onClick={() => addToCart(product)} 
            style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', marginTop: '15px', background: 'orange', color: 'black', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;