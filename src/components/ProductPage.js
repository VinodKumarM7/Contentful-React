import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const ProductPage = (data) => {
  const location = useLocation();
  const { id } = useParams();

 
  const products = data.data.map(item => ({
    id: item.fields.id,
    image: item.fields.productImage.fields.file.url,
    title: item.fields.name,
    description: documentToReactComponents(item.fields.description), 
  }));

  

  const product = location.state?.product || products[id-1];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'cover' }} />
            </Card>
            </Col>
            
        <Col md={6}>
        <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              {product.description}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
