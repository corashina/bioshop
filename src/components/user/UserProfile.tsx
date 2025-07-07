import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="user-profile">
      <div className="user-info">
        {currentUser.photoURL && (
          <img 
            src={currentUser.photoURL} 
            alt="Profile" 
            className="user-avatar"
          />
        )}
        <div className="user-details">
          <h3>{currentUser.displayName || 'User'}</h3>
          <p>{currentUser.email}</p>
        </div>
      </div>
      <div className="user-actions">
        <Link to="/profile" className="profile-link">
          View Profile
        </Link>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile; 