import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import Product from './Product';
import { publicRequest } from '../requestMethod';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category ? `/products?category=${category}` : '/products'
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  // filter
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  // sort
  useEffect(() => {
    if (sort === 'Newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <h2 style={{ padding: '0 20px', marginTop: '32px' }}>Popular Products</h2>
      <Container>
        {category
          ? filteredProducts.map((item, i) => <Product key={i} item={item} />)
          : products.map((item, i) => <Product key={i} item={item} />)}
      </Container>
    </>
  );
};

export default Products;
