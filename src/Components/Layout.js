import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/components/Layout.css';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <title>Space X</title>
        {isMobile && (
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          </div>
        )}
        <Nav className={`navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Nav.Item>
            <Nav.Link href="/crew">Liste des membres</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey href="/Fuseur">
              Liste des fusées
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/history">Histoire</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/company">À propos de SpaceX</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2023 IPSSI SQY</footer>
    </>
  );
};

export default Layout;
