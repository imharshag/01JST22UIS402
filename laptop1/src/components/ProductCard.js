import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{product.productName}</Typography>
      <Typography variant="subtitle1">{product.company}</Typography>
      <Typography variant="body2">Category: {product.category}</Typography>
      <Typography variant="body2">Price: ${product.price}</Typography>
      <Typography variant="body2">Rating: {product.rating}</Typography>
      <Typography variant="body2">Discount: {product.discount}%</Typography>
      <Typography variant="body2">Availability: {product.availability}</Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
