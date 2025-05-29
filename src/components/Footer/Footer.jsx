import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className="container-fluid py-4" style={{ borderTop: `2px solid ${darkMode ? '#fff' : '#2009AF'}` }}>
      <div className="container d-flex justify-content-center align-items-center">
        <img 
          src={darkMode ? '/assets/images/logo.png' : '/assets/images/logo_light.png'} 
          alt="Cultark Logo" 
          style={{ height: '45px' }}
        />
      </div>
    </footer>
  );
};

export default Footer;