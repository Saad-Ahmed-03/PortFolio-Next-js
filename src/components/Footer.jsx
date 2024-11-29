import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <Container>
        <Row>
          {/* Personal Branding */}
          <Col xs={12} md={4} className='flex flex-column justify-content-center'>
                <h3 className='fs-30 cusrive-font fs-bold'>Saad Ahmed</h3>
                <p className='mt-4'>"Creating impactful solutions with passion and innovation."</p>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} md={4}>
            <h4 style={{ color: '#ecf0f1' }} className="mb-3">Quick Links</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#introduction" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Introduction</a></li>
              <li><a href="#skills" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Skills</a></li>
              <li><a href="#work-experience" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Work Experience</a></li>
              <li><a href="#skills-rating" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Skills Rating</a></li>
              <li><a href="#education" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Education</a></li>
              <li><a href="#projects" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Projects</a></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col xs={12} md={4}>
            <h4 style={{ color: '#ecf0f1' }} className="mb-3">Connect With Me</h4>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
                <li>
                    <a href="https://github.com/Saad028" target="_blank" rel="noopener noreferrer" className="me-3 github text-light">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/saad-ahmed-08b73a177" target="_blank" rel="noopener noreferrer" className="me-3 linkedin text-light">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="mailto:saadjadoon02891@gmail.com" target="_blank" rel="noopener noreferrer" className="me-3 gmail text-light">
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+923113547354" target="_blank" rel="noopener noreferrer" className="me-3 whatsapp text-light">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col xs={12} className="text-center" style={{ marginTop: '20px' }}>
            <p style={{ margin: 0 }}>&copy; {currentYear} Saad Ahmed. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
  );
}
