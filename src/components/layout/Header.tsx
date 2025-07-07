import React, { useState } from 'react'
import { useAuth } from '../../features/auth/hooks/useAuth'
import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const { currentUser, userProfile, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowProfileMenu(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="phone-number">
              <span>+44 739 8562 456</span>
            </div>
            <div className="logo">
              <h1>Biolab Shop</h1>
            </div>
            <div className="header-actions">
              <div className="search-bar">
                <input type="text" placeholder="Wyszukaj" />
                <button type="button" className="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </div>
              <div className="cart">
                <button className="cart-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span className="cart-count">0</span>
                </button>
              </div>
              <div className="profile-section">
                {currentUser ? (
                  <div className="profile-dropdown">
                    <button 
                      className="profile-btn"
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                    >
                      {userProfile?.photoURL ? (
                        <img 
                          src={userProfile.photoURL} 
                          alt="Profile" 
                          className="profile-avatar"
                        />
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      )}
                    </button>
                                         {showProfileMenu && (
                       <div className="profile-menu">
                         <div className="profile-info">
                           <p className="profile-name">{userProfile?.displayName || currentUser.displayName || 'User'}</p>
                           <p className="profile-email">{currentUser.email}</p>
                         </div>
                         <div className="profile-actions">
                           <ul>
                             <li>
                               <Link 
                                 to="/profile" 
                                 className="profile-link"
                                 onClick={() => setShowProfileMenu(false)}
                               >
                                 View Profile
                               </Link>
                             </li>
                             <li>
                               <button 
                                 onClick={handleLogout}
                                 className="logout-btn"
                               >
                                 Logout
                               </button>
                             </li>
                           </ul>
                         </div>
                       </div>
                     )}
                  </div>
                ) : (
                  <Link to="/login" className="login-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                      <polyline points="10,17 15,12 10,7"/>
                      <line x1="15" y1="12" x2="3" y2="12"/>
                    </svg>
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 