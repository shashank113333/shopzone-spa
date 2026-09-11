import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    alert('Logged in successfully!');
    navigate('/checkout'); 
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Please Login to Continue</h2>
      <button onClick={handleLogin} style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
        Login as Dummy User
      </button>
    </div>
  );
}

export default Login;