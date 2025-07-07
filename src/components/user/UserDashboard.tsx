import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './UserDashboard.css';

const UserDashboard: React.FC = () => {
  const { userProfile } = useAuth();

  if (!userProfile) {
    return null;
  }

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h2>Welcome back, {userProfile.displayName}!</h2>
        <Link to="/profile" className="view-profile-btn">
          View Full Profile
        </Link>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>{userProfile.wishlist?.length || 0}</h3>
            <p>Wishlist Items</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🛒</div>
          <div className="stat-content">
            <h3>{userProfile.cartItems?.length || 0}</h3>
            <p>Cart Items</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>{userProfile.orderHistory?.length || 0}</h3>
            <p>Orders</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>{userProfile.lastLoginAt.toLocaleDateString()}</h3>
            <p>Last Login</p>
          </div>
        </div>
      </div>

      <div className="dashboard-info">
        <div className="info-section">
          <h3>Account Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Email:</label>
              <span>{userProfile.email}</span>
            </div>
            <div className="info-item">
              <label>Member Since:</label>
              <span>{userProfile.createdAt.toLocaleDateString()}</span>
            </div>
            {userProfile.phoneNumber && (
              <div className="info-item">
                <label>Phone:</label>
                <span>{userProfile.phoneNumber}</span>
              </div>
            )}
          </div>
        </div>

        <div className="info-section">
          <h3>Preferences</h3>
          <div className="preferences-list">
            <div className="preference-item">
              <span>Newsletter:</span>
              <span className={userProfile.preferences?.newsletter ? 'enabled' : 'disabled'}>
                {userProfile.preferences?.newsletter ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <div className="preference-item">
              <span>Notifications:</span>
              <span className={userProfile.preferences?.notifications ? 'enabled' : 'disabled'}>
                {userProfile.preferences?.notifications ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <div className="preference-item">
              <span>Theme:</span>
              <span className="theme-value">{userProfile.preferences?.theme || 'light'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 