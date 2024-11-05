import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md'; 
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery); 
  };

  return (
    <header className="header d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="header-left">
        <h2 className="header-title">Overview</h2>
        <p className="header-subtitle">Detailed information about your store</p>
      </div>
      <div className="header-right d-flex align-items-center">
        <form onSubmit={handleSearch} className="search-form d-flex">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary search-button">Search</button>
        </form>
        <div className="notification-bell mx-3">
          <MdNotifications size={24} />
        </div>
        <div className="user-menu dropdown">
          <img 
            src="https://via.placeholder.com/35" 
            alt="User Avatar" 
            className="user-avatar rounded-circle dropdown-toggle" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" 
          />
          <div className="dropdown-menu dropdown-menu-end">
            <p className="dropdown-item">Profile</p>
            <p className="dropdown-item">Settings</p>
            <p className="dropdown-item">Log Out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;