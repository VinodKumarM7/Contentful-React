import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Row, Col } from 'react-bootstrap';

const About = (data) => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Column - Image */}
        <Col md={6}>
          <img
            src={data.data.aboutUsImage.fields.file.url}
            alt="About Us"
            className="img-fluid"
            style={{ borderRadius: '8px' }}
          />
        </Col>

        <Col md={6}>
        {documentToReactComponents(data.data.aboutUsDescription)} 
        </Col>
      </Row>
    </Container>
  );
};

export default About;
