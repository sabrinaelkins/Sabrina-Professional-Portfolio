import React from 'react';
import Nav from '../Nav';

const Header = () => {
  return (
    <header>
      <Nav></Nav>
      <section className="hero">
        <h1 style={{ color: 'Forest Green' }}>Sabrina Elkins</h1>
      </section>
    </header>
  );
};

export default Header;