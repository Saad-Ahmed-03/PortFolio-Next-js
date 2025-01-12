import React from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import MainLogo from '@/images/SaadAhmed-logo.png'

export default function Header({
  scrollToSkills,
  scrollToExperience,
  scrollToSkillsRate,
  scrollToEducate,
  scrollToProject,
}) {
  return (
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid="md" className='container-header d-block'>
                <Row>
                    <Col lg={2} sm={2} xs={5}>
                        <a className='main-page-link' href='./'> 
                            <img className="main-logo" src={MainLogo.src} alt='logo'/>
                        </a>
                    </Col>
                    <Col lg={10} sm={2} xs={7} className='flex naviagtion'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link onClick={scrollToSkills}>Skills</Nav.Link>
                            <Nav.Link onClick={scrollToExperience}>Work Experience</Nav.Link>
                            <Nav.Link onClick={scrollToSkillsRate}>Skills Rating</Nav.Link>
                            <Nav.Link onClick={scrollToEducate}>Education</Nav.Link>
                            <Nav.Link onClick={scrollToProject}>Projects</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
            </Row>
            </Container>
          </Navbar>
  );
}