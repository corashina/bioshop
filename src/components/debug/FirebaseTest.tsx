import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

const FirebaseTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing Firebase connection...');

  useEffect(() => {
    const testFirebase = async () => {
      try {
        // Test if Firebase auth is initialized
        if (auth) {
          setStatus('Firebase Auth initialized successfully!');
          console.log('Firebase Auth:', auth);
        } else {
          setStatus('Firebase Auth not initialized!');
        }
      } catch (error) {
        setStatus(`Firebase Error: ${error}`);
        console.error('Firebase test error:', error);
      }
    };

    testFirebase();
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      background: 'white', 
      margin: '20px', 
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h3>Firebase Connection Test</h3>
      <p>{status}</p>
      <p>Check the browser console for more details.</p>
    </div>
  );
};

export default FirebaseTest; 