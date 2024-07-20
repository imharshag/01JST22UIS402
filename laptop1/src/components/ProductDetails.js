import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = ({ product }) => (
  <Card>
    <CardContent>
      <Typography variant="h4">{product.productName}</Typography>
      <Typography variant="subtitle1">{product.company}</Typography>
      <Typography variant="body1">Category: {product.category}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <Typography variant="body1">Rating: {product.rating}</Typography>
      <Typography variant="body1">Discount: {product.discount}%</Typography>
      <Typography variant="body1">Availability: {product.availability}</Typography>
    </CardContent>
  </Card>
);

export default ProductDetails;
