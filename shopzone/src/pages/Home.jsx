import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ fontSize: '50px', color: 'orange' }}>Welcome to ShopZone! 🛍️</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px', margin: '20px auto', color: '#ccc' }}>
        Your one-stop destination for the best products at the best prices. Explore our wide range of categories today!
      </p>
      <Link to="/shop">
        <button style={{ padding: '15px 30px', fontSize: '18px', background: 'white', color: 'black', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>
          Shop Now 🚀
        </button>
      </Link>
    </div>
  );
}

export default Home;