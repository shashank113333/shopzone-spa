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
    return <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Loading products...</h2>;
  }

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Products</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card" 
            style={{ 
              border: '1px solid #333', 
              padding: '15px', 
              borderRadius: '8px', 
              background: '#222',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                width="250"
                height="200"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <h2 style={{ marginTop: '12px', fontSize: '18px' }}>{product.title}</h2>
              <p style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>Price: ${product.price}</p>
            </div>

            <Link 
              to={`/product/${product.id}`} 
              aria-label={`View details for ${product.title}`}
              style={{ 
                background: '#ffffff', 
                color: '#000000', 
                padding: '10px 14px', 
                textDecoration: 'none', 
                borderRadius: '6px', 
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '15px',
                display: 'block' 
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;