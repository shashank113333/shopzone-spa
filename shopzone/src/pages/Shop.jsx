import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); 
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <h1>Our Products</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', background: '#222' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`} style={{ background: 'white', color: 'black', padding: '8px 12px', textDecoration: 'none', borderRadius: '4px', display: 'inline-block' }}>
              View Details
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Shop;