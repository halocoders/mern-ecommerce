import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, Menu } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.nav`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 10px', position: 'relative' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none' })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 300ms ease-in-out;
  @media (max-width: 640px) {
    transform: ${(props) => (props.isShow ? 'scale(1)' : 'scale(0)')};
    transform-origin: top right;
    flex: 2;
    flex-direction: column;
    position: absolute;
    height: max-content;
    width: 70%;
    top: 3rem;
    right: 1rem;
    padding: 20px;
    justify-content: space-evenly;
    z-index: 99;
    background: teal;
    box-shadow: 10px 10px 25px rgb(139 139 139 / 50%);
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
    padding: '12px 0',
    margin: '16px 0',
    color: 'white',
  })}
`;

const MenuContainer = styled.div`
  display: none;
  padding: 0 10px;
  ${mobile({ display: 'flex', flex: '1', justifyContent: 'flex-end' })};
`;

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HALOCODERS.</Logo>
        </Center>
        <MenuContainer>
          <button
            style={{ background: 'none', border: 'none' }}
            onClick={() => setMenuShow(!menuShow)}
          >
            <Menu />
          </button>
        </MenuContainer>
        <Right isShow={menuShow}>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
