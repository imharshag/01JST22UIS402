import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Grid, TextField, MenuItem, Button } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    top: 10,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { company, category, minPrice, maxPrice, top } = filters;
      try {
        const response = await getProducts(company, category, top, minPrice, maxPrice);
        setProducts(response);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <TextField
          label="Company"
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
          select
        >
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          <MenuItem value="SNP">SNP</MenuItem>
          <MenuItem value="MYN">MYN</MenuItem>
          <MenuItem value="AZO">AZO</MenuItem>
        </TextField>
        <TextField
          label="Category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          select
        >
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Computer">Computer</MenuItem>
          <MenuItem value="TV">TV</MenuItem>
        </TextField>
        <TextField
          label="Min Price"
          name="minPrice"
          type="number"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <TextField
          label="Max Price"
          name="maxPrice"
          type="number"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <TextField
          label="Top N"
          name="top"
          type="number"
          value={filters.top}
          onChange={handleFilterChange}
        />
        <Button onClick={() => setFilters({ ...filters })}>Apply Filters</Button>
      </div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.productName}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProductsPage;
