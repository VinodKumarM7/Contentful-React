import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductShowcase = (data) => {
  const navigate = useNavigate();

  const products = data.data.map(item => ({
    id: item.fields.id,
    image: item.fields.productImage.fields.file.url,
    title: item.fields.name
  }));

  

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Container className="my-5">
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="d-flex justify-content-center">
            <Card onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductShowcase;
