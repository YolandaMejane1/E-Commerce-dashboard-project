import React, { useState } from 'react';
import { MdOutlineNotifications } from 'react-icons/md'; 
import { FaSearch, FaDollarSign } from 'react-icons/fa'; 
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineDollarCircle, AiOutlineClockCircle } from 'react-icons/ai'; // Importing outlined icons
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery); 
  };

  return (
    <header className="header d-flex flex-column w-100">
      <div className="d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="header-left">
          <h2 className="header-title">Overview</h2>
          <p className="header-subtitle">Detailed information about your store</p>
        </div>
        <div className="header-right d-flex align-items-center">
          <form onSubmit={handleSearch} className="search-form d-flex">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search anything..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="notification-bell mx-3">
            <MdOutlineNotifications size={24} />
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
      </div>
      <div className="dashboard-summary d-flex justify-content-around align-items-center bg-light" style={{ maxHeight: '200px', height: '100%', padding: '0rem' }}>
        <DashboardCard title="Monthly Sales" value="$1,200" trend="increase" icon={<GiShoppingCart style={{ color: 'f6a723', fontSize: '1.5rem' }} />} />
        <DashboardCard title="Total Revenue" value="$15,000" trend="decrease" icon={<FaDollarSign style={{ color: '2563eb', fontSize: '1.5rem' }} />} />
        <DashboardCard title="Returns" value="$200" trend="decrease" icon={<AiOutlineClockCircle style={{ color: 'ed4f9d', fontSize: '1.5rem' }} />} />
        <DashboardCard title="Ad Spend" value="$2,000" trend="increase" icon={<AiOutlineDollarCircle style={{ color: '38bdf8', fontSize: '1.5rem' }} />} />
      </div>
    </header>
  );
};

const DashboardCard = ({ title, value, trend, icon }) => {
  const trendClass = trend === 'increase' ? 'text-success' : 'text-danger';
  const trendSymbol = trend === 'increase' ? '↑' : '↓';
  
  return (
    <div className="card text-center" style={{ width: 'calc(100% / 4)', padding: '1rem', height: '100%', border: 'none' }}>
      <div className="d-flex justify-content-center align-items-center mb-2">
        {icon}
        <h5 className="card-title ml-2">{title}</h5>
      </div>
      <p className="card-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {value} <span className={`${trendClass}`}>{trendSymbol} 5%</span>
      </p>
    </div>
  );
};

export default Header;