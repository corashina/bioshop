import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1>🎉 Basic Routing Works!</h1>
      <p>If you can see this, the basic React Router setup is working correctly.</p>
      <div style={{ marginTop: '20px' }}>
        <a 
          href="/test" 
          style={{ 
            color: 'white', 
            textDecoration: 'underline',
            marginRight: '20px'
          }}
        >
          Test Firebase
        </a>
        <a 
          href="/debug" 
          style={{ 
            color: 'white', 
            textDecoration: 'underline',
            marginRight: '20px'
          }}
        >
          Debug Auth
        </a>
        <a 
          href="/login" 
          style={{ 
            color: 'white', 
            textDecoration: 'underline'
          }}
        >
          Login Page
        </a>
      </div>
    </div>
  );
};

export default SimpleTest; 