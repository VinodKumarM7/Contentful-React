import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './styles.css';

const Footer = (data) => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        {/* First Row - Cards with Image Overlays */}
        <Row>
          {data.data.map((item, index) => (
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
      </Container>
    </footer>
  );
};

export default Footer;
