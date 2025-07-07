import React from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';

const AuthDebug: React.FC = () => {
  const { currentUser, userProfile, loading } = useAuth();

  return (
    <div style={{ 
      padding: '20px', 
      background: 'white', 
      margin: '20px', 
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'monospace'
    }}>
      <h3>Authentication Debug Info</h3>
      <div style={{ marginBottom: '10px' }}>
        <strong>Loading:</strong> {loading ? 'true' : 'false'}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Current User:</strong> {currentUser ? 'Logged In' : 'Not Logged In'}
      </div>
      {currentUser && (
        <div style={{ marginBottom: '10px' }}>
          <strong>User Email:</strong> {currentUser.email}
        </div>
      )}
      <div style={{ marginBottom: '10px' }}>
        <strong>User Profile:</strong> {userProfile ? 'Loaded' : 'Not Loaded'}
      </div>
      {userProfile && (
        <div style={{ marginBottom: '10px' }}>
          <strong>Profile Name:</strong> {userProfile.displayName}
        </div>
      )}
      <div style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Check browser console for more details
      </div>
    </div>
  );
};

export default AuthDebug; 