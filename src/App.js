import React, { useEffect, useState } from 'react';
import client from './contentfulClient';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductShowcase from './components/ProductShowcase';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const [headerModel, setheaderModel] = useState(null);
  const [bannerModel, setbannerModel] = useState(null);
  const [aboutModel, setaboutModel] = useState(null);
  const [productModel, setproductModel] = useState(null);
  const [footerModel, setfooterModel] = useState(null);
  const [footerTopModel, setfooterTopModel] = useState(null);

  useEffect(() => {
    // Fetch Header
    client.getEntry('5tplUPGuoCHMXx72YNJfuz').then((response) => {
      setheaderModel(response.fields);
    });

    // Fetch Banner
    client.getEntry('3d6PGqcCLD9tJ0heGAju6a').then((response) => {
      setbannerModel(response.fields);
    });

    
    // Fetch About
    client.getEntry('2tTFhwDsypW42DzdyrpdFV').then((response) => {
      setaboutModel(response.fields);
    });
    
    // Fetch Products
    client.getEntries({
          content_type: 'productModel', 
      }).then((response) => {
        setproductModel(response.items);
      });
  
  
    // Fetch Footer
    client.getEntry('7veAz3ZKSW7n75VvkJ6nbE').then((response) => {
      setfooterModel(response.fields);
    });

    // Fetch Footer top
    client.getEntries({
        content_type: 'footerTopModel', 
    }).then((response) => {
      setfooterTopModel(response.items);
      console.log('footerTopModel', response);
    });
    
  }, []);

  if (!headerModel || !bannerModel || !footerModel || !footerTopModel) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Header data={headerModel} />
        <Banner data={bannerModel} />
        <Routes>
          <Route path="/" element={<ProductShowcase data={productModel} />} />
          <Route path="/about" element={<About data={aboutModel}/>} />
          <Route path="/product/:id" element={<ProductPage data={productModel}/>} />
          <Route path="/home" element={<Navigate to="/" />} /> 
        </Routes>
        <Footer footerTopData={footerTopModel} footerData={footerModel} />
      </div>
    </Router>
  );
};

export default App;
