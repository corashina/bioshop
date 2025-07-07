import React, { useState } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { UserService } from '../../services/userService';
import './UserProfilePage.css';

const UserProfilePage: React.FC = () => {
  const { userProfile, refreshUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    displayName: userProfile?.displayName || '',
    phoneNumber: userProfile?.phoneNumber || '',
    address: {
      street: userProfile?.address?.street || '',
      city: userProfile?.address?.city || '',
      state: userProfile?.address?.state || '',
      zipCode: userProfile?.address?.zipCode || '',
      country: userProfile?.address?.country || '',
    },
    preferences: {
      newsletter: userProfile?.preferences?.newsletter ?? true,
      notifications: userProfile?.preferences?.notifications ?? true,
      theme: userProfile?.preferences?.theme || 'light',
    }
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as Record<string, unknown>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = async () => {
    if (!userProfile) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await UserService.updateUserProfile(userProfile.uid, {
        displayName: formData.displayName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        preferences: formData.preferences
      });

      await refreshUserProfile();
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error('Error updating profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      displayName: userProfile?.displayName || '',
      phoneNumber: userProfile?.phoneNumber || '',
      address: {
        street: userProfile?.address?.street || '',
        city: userProfile?.address?.city || '',
        state: userProfile?.address?.state || '',
        zipCode: userProfile?.address?.zipCode || '',
        country: userProfile?.address?.country || '',
      },
      preferences: {
        newsletter: userProfile?.preferences?.newsletter ?? true,
        notifications: userProfile?.preferences?.notifications ?? true,
        theme: userProfile?.preferences?.theme || 'light',
      }
    });
    setIsEditing(false);
    setError(null);
    setSuccess(null);
  };

  if (!userProfile) {
    return <div className="profile-loading">Loading profile...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar-section">
            {userProfile.photoURL && (
              <img 
                src={userProfile.photoURL} 
                alt="Profile" 
                className="profile-avatar"
              />
            )}
            <div className="profile-info">
              <h1>{userProfile.displayName}</h1>
              <p>{userProfile.email}</p>
              <p className="member-since">
                Member since {userProfile.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="profile-actions">
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="edit-btn"
              >
                Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button 
                  onClick={handleSave}
                  disabled={loading}
                  className="save-btn"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button 
                  onClick={handleCancel}
                  disabled={loading}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <div className="profile-sections">
          {/* Personal Information */}
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Display Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => handleInputChange('displayName', e.target.value)}
                    placeholder="Enter your display name"
                  />
                ) : (
                  <p>{userProfile.displayName || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                <p>{userProfile.email}</p>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <p>{userProfile.phoneNumber || 'Not set'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="profile-section">
            <h2>Address Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Street Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address.street}
                    onChange={(e) => handleInputChange('address.street', e.target.value)}
                    placeholder="Enter street address"
                  />
                ) : (
                  <p>{userProfile.address?.street || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>City</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                    placeholder="Enter city"
                  />
                ) : (
                  <p>{userProfile.address?.city || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>State/Province</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address.state}
                    onChange={(e) => handleInputChange('address.state', e.target.value)}
                    placeholder="Enter state/province"
                  />
                ) : (
                  <p>{userProfile.address?.state || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>ZIP/Postal Code</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address.zipCode}
                    onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                    placeholder="Enter ZIP/postal code"
                  />
                ) : (
                  <p>{userProfile.address?.zipCode || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Country</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address.country}
                    onChange={(e) => handleInputChange('address.country', e.target.value)}
                    placeholder="Enter country"
                  />
                ) : (
                  <p>{userProfile.address?.country || 'Not set'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="profile-section">
            <h2>Preferences</h2>
            <div className="preferences-grid">
              <div className="preference-item">
                <label className="checkbox-label">
                  {isEditing ? (
                    <input
                      type="checkbox"
                      checked={formData.preferences.newsletter}
                      onChange={(e) => handleInputChange('preferences.newsletter', e.target.checked)}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      checked={userProfile.preferences?.newsletter ?? false}
                      disabled
                    />
                  )}
                  <span>Newsletter Subscription</span>
                </label>
              </div>

              <div className="preference-item">
                <label className="checkbox-label">
                  {isEditing ? (
                    <input
                      type="checkbox"
                      checked={formData.preferences.notifications}
                      onChange={(e) => handleInputChange('preferences.notifications', e.target.checked)}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      checked={userProfile.preferences?.notifications ?? false}
                      disabled
                    />
                  )}
                  <span>Push Notifications</span>
                </label>
              </div>

              <div className="preference-item">
                <label>Theme Preference</label>
                {isEditing ? (
                  <select
                    value={formData.preferences.theme}
                    onChange={(e) => handleInputChange('preferences.theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                ) : (
                  <p>{userProfile.preferences?.theme || 'light'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Account Statistics */}
          <div className="profile-section">
            <h2>Account Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>{userProfile.wishlist?.length || 0}</h3>
                <p>Wishlist Items</p>
              </div>
              <div className="stat-item">
                <h3>{userProfile.orderHistory?.length || 0}</h3>
                <p>Orders</p>
              </div>
              <div className="stat-item">
                <h3>{userProfile.cartItems?.length || 0}</h3>
                <p>Cart Items</p>
              </div>
              <div className="stat-item">
                <h3>{userProfile.lastLoginAt.toLocaleDateString()}</h3>
                <p>Last Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage; 