import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 32px;
`;

const NotFoundLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
`;

const PageNotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Not Found</NotFoundHeading>
      <NotFoundMessage>The page you are looking for might be under construction or does not exist.</NotFoundMessage>
      <NotFoundLink to="/">Go back to the home page</NotFoundLink>
    </NotFoundContainer>
  );
};

export default PageNotFound;
