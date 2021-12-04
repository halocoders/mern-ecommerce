import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const Title = styled.h2`
  margin-top: 32px;
  padding: 20px;
`;

const Categories = () => {
  return (
    <>
      <Title>Popular Categories</Title>
      <Container>
        {categories.map((item, i) => (
          <CategoryItem key={i} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
