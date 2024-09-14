import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Byte Code Error</h1>
      <p style={styles.description}>
        Byte Code Error is dedicated to crafting high-quality, innovative solutions for all your digital needs.
        From mobile applications to web development, our team ensures precision and perfection in every line of code.
        We believe in transforming your ideas into reality by integrating the latest technologies.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.services}>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>Mobile App Development</h3>
            <p style={styles.serviceDescription}>
              We build scalable, user-friendly mobile applications for Android and iOS platforms with a focus on performance.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>Web Development</h3>
            <p style={styles.serviceDescription}>
              Our team creates stunning, responsive websites with the latest front-end and back-end technologies.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>Cloud Solutions</h3>
            <p style={styles.serviceDescription}>
              We offer cloud-based solutions to help your business scale and manage resources efficiently with high security.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.centeredSection}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <ul style={styles.centeredList}>
          <li>Expertise in modern technologies like React, Node.js, and AWS</li>
          <li>Customer-centric approach with tailored solutions</li>
          <li>Commitment to delivering quality products on time</li>
          <li>Innovative and scalable solutions for businesses of all sizes</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>
          Interested in learning more?{' '}
          <span 
            style={styles.link} 
            onClick={() => navigate('/ContactUs')} 
          >
            Contact Us
          </span>{' '}
          today!
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  description: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#b0b0b0',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#ff6b6b',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  serviceItem: {
    width: '300px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#b0b0b0',
  },
  centeredSection: {
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredList: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '1.1rem',
    color: '#b0b0b0',
    textAlign: 'center',
    marginTop: '20px',
    lineHeight: '2',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#b0b0b0',
  },
  link: {
    color: '#ff6b6b',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default LearnMore;
