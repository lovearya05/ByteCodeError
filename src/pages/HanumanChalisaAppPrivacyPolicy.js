import React from 'react';

const HanumanChalisaAppPrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Information Collection</h2>
        <p style={styles.text}>
          We do not collect any personal data such as names, email addresses, or phone numbers when you use the Hanuman Chalisa app. The app is designed for users to listen to Hanuman Chalisa and view images without the need to share any sensitive information.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Data Usage</h2>
        <p style={styles.text}>
          The app does not collect or transmit any personal or sensitive data from your device. All audio files and images are stored within the app and are used for personal devotional purposes. No user data is stored or processed by ByteCodeError.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Third-Party Services</h2>
        <p style={styles.text}>
          The Hanuman Chalisa app does not use third-party services or tools that may collect information from users. Therefore, no data is shared with external services.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Children’s Privacy</h2>
        <p style={styles.text}>
          Our app does not target children under the age of 13, and we do not knowingly collect any personal information from children. The app is safe for all age groups and contains no harmful content.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and you are encouraged to review this policy periodically.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.text}>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: happyarya1405@gmail.com
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  date: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    color: '#e0e0e0',
  }
};

export default HanumanChalisaAppPrivacyPolicy;
