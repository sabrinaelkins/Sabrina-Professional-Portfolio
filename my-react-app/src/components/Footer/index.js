import React from 'react';
// import { GitHub, LinkedIn } from 'react-icons/';

const Footer = () => {
  return (
    <>
      <h6 className="d-flex justify-content-center align-items-center">
        Built with React
      </h6>
      <footer className="d-flex justify-content-center align-items-center mb-5">
        <a href="https://github.com/sabrinaelkins" target="_blank" rel="noopener noreferrer">
          <h1 className="white mx-3">
            GitHub
          </h1>
        </a>
        <a href="https://www.linkedin.com/in/sabrina-elkins-01b319159/" target="_blank" rel="noopener noreferrer">
          <h1 className="pink mx-3">
            LinkedIn
          </h1>
        </a>
      </footer>
    </>
  );
};

export default Footer;