import React from 'react';
import './Component.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner">
      <Container className=" pt-md-5">
        <Row className="pt-5 mt-md-5">
          <Col md={1}></Col>
          <Col md={6}>
            <h1 className="pt-md-5 mt-md-3   text-md-start">
              Minnal Murali:
              <hr />
              <span> Here to Listen, Ready to Act</span>
            </h1>

            <Button variant='warning' className='mt-2 responsive-button'> <Link style={{textDecoration:"none",color:"white"}} to="/login">Have a grievance? Speak up</Link></Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
