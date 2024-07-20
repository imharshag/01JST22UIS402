import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ match }) => {
  const productId = match.params.id;
  const product = {}; 
  return <ProductDetails product={product} />;
};

export default ProductPage;
