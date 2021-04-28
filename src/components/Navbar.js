import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <>
      <Nav
        justify
        variant="tabs"
        activeKey="/"
      >
        <Nav.Item>
          <Link to="/">NOC</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/detailing">Detailing</Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
