import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './styles.css';

const Footer = ({ footerTopData, footerData }) => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        {/* First Row - Cards with Image Overlays */}
        <Row>
          {footerTopData.map((item, index) => (
            <Col key={index} md={6}>
              <Card className="bg-dark text-white">
                <Card.Img src={item.fields.bgImage.fields.file.url} alt={`Card ${index + 1}`} />
                <Card.ImgOverlay>
                  <Card.Title>{item.fields.cardTitle}</Card.Title>
                  <Card.Text>{item.fields.cardDescription}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Second Row - Footer Content */}
        <Row className="mt-4">
          <Col md={4}>
            {documentToReactComponents(footerData.aboutUs)}
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}><a href={link} className="text-white">{link}</a></li>
              ))}
            </ul>
          </Col>
          <Col md={4}>
            {documentToReactComponents(footerData.contactInfo)} 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
