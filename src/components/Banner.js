import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles.css';

const Banner = (data) => {
  return (
    <div className="banner" style={{
      backgroundImage: `url(${data.data.backgroundImage.fields.file.url})`
    }}>
      <Container className="text-center text-white">
        <h1>{data.data.title}</h1>
        <p>{data.data.subtitle}</p>
        <Button variant="primary" href={data.data.buttonLink} >{data.data.buttonText} </Button>
      </Container>
    </div>
  );
};

export default Banner;
