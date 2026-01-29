import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase-config";
import MenuItems from "./MenuItems";
import getMenuItems from "../menuItems";
import "../App.css";

const Navbar = () => {
  const menuItems = getMenuItems();
  const [isAuth, setIsAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleLogOutClick = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
      window.location.pathname = "/";
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        setUserProfile({
          name: user.displayName || "User",
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        setIsAuth(false);
        setUserProfile(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <a href="/" className="brand-link">
            <span className="brand-icon">🧠</span>
            <span className="brand-text">Ashish Mind Care</span>
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="desktop-menu">
          {menuItems
            .filter(menu => menu.title && menu.title.trim() !== '' && menu.title !== "Home")
            .map((menu, index) => {
              const depthLevel = 0;
              return (
                <li key={index} className="menu-item">
                  <MenuItems 
                    items={menu} 
                    depthLevel={depthLevel}
                  />
                </li>
              );
            })}
        </ul>

        {/* Authentication Section */}
        <div className="auth-section">
          {!isAuth ? (
            <a href="/login" className="login-btn">
              <span className="btn-icon">🔐</span>
              <span>Login</span>
            </a>
          ) : (
            <div className="auth-links">
              {/* User Profile */}
              <div className="user-profile">
                {userProfile?.photoURL ? (
                  <img 
                    src={userProfile.photoURL} 
                    alt="Profile" 
                    className="profile-img"
                  />
                ) : (
                  <div className="profile-avatar">
                    {userProfile?.name?.charAt(0) || 'U'}
                  </div>
                )}
                <span className="profile-name">
                  {userProfile?.name || 'User'}
                </span>
              </div>

              <a href="/createpost" className="create-post-btn">
                <span className="btn-icon">✍️</span>
                <span>Create Post</span>
              </a>
              
              <button className="logout-btn" onClick={handleLogOutClick}>
                <span className="btn-icon">🚪</span>
                <span>Logout</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Filtered menu items for mobile */}
          {menuItems
            .filter(menu => menu.title && menu.title.trim() !== '' && menu.title !== "Home")
            .map((menu, index) => (
              <a key={index} href={menu.url || '#'} className="mobile-menu-item">
                <span className="menu-icon">{menu.icon || '📄'}</span>
                <span>{menu.title}</span>
              </a>
            ))}
          
          {isAuth ? (
            <>
              <div className="mobile-user-profile">
                <span className="menu-icon">👋</span>
                <span>{userProfile?.name || 'User'}</span>
              </div>
              <a href="/createpost" className="mobile-menu-item">
                <span className="menu-icon">✍️</span>
                <span>Create Post</span>
              </a>
              <button className="mobile-logout-btn" onClick={handleLogOutClick}>
                <span className="menu-icon">🚪</span>
                <span>Logout</span>
              </button>
            </>
          ) : (
            <a href="/login" className="mobile-menu-item">
              <span className="menu-icon">🔐</span>
              <span>Login</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;