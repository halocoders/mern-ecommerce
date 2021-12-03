import React from 'react';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px 5px 24px 5px;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const ContainerImg = styled.div`
  min-width: 380px;
  height: 450px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;
const Title = styled.h2`
  margin-top: 16px;
  color: black;
`;

const Desc = styled.p`
  margin-top: 8px;
  color: black;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
        <ContainerImg>
          <Image src={item.img} />
        </ContainerImg>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
      </Link>
      {/* <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info> */}
    </Container>
  );
};

export default Product;
