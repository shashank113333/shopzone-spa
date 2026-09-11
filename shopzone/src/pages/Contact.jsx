function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '40px', background: '#222', borderRadius: '10px', marginTop: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'orange' }}>Contact Us 📞</h1>
      <p style={{ textAlign: 'center', color: '#ccc' }}>We'd love to hear from you!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '5px', border: 'none' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '5px', border: 'none' }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: '12px', borderRadius: '5px', border: 'none' }}></textarea>
        <button style={{ padding: '12px', background: 'orange', color: 'black', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;