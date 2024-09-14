import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomeScreen = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Byte Code Error</h1>
        <p style={styles.subtitle}>
          We build innovative solutions for your digital needs.
        </p>
        <div style={styles.btnContainer}>
          <button 
            style={styles.button} 
            onClick={() => navigate('/LearnMore')} // Navigate to the LearnMore page
          >
            Learn More
          </button>
          <button 
            style={styles.buttonOutline} 
            onClick={() => navigate('/ContactUs')} // Adjust this if you have a Contact page route
          >
            Contact Us
          </button>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Byte Code Error. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    color: '#b0b0b0',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: '#ff6b6b',
    padding: '10px 20px',
    borderRadius: '25px',
    border: '2px solid #ff6b6b',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    textAlign: 'center',
    color: '#b0b0b0',
  },
};

export default HomeScreen;
