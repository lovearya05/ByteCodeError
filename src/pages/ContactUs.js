import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>
        We'd love to hear from you! If you have any questions, feedback, or would like to discuss a project, feel free to reach out to us.
      </p>
      
      <div style={styles.contactInfo}>
        <h2>Email Us At:</h2>
        <a href="mailto:happyarya1405@gmail.com" style={styles.email}>
          happyarya1405@gmail.com
        </a>
      </div>
      
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Byte Code Error. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '40px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#b0b0b0',
  },
  contactInfo: {
    marginBottom: '40px',
  },
  email: {
    color: '#ff6b6b',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    textAlign: 'center',
    color: '#b0b0b0',
  },
};

export default ContactUs;
