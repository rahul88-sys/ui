import React from 'react';
import HrsForm from '../Layout/HrsForm';
import zoomBackground from '../assets/Six-Future-Predictions-for-Video-Conferencing-Condeco-Software-878x550.jpg';
import meetingIcon from '../assets/Six-Future-Predictions-for-Video-Conferencing-Condeco-Software-878x550.jpg';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${zoomBackground}) center/cover;
`;

const HomeContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  text-align: center;

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  img {
    width: 80px;
    margin-bottom: 20px;
  }
`;

const Home = () => {
  return (
    <HrsForm>
    {/* <Button>Join Now</Button> */}
      <HomeContainer>
        
        <HomeContent>
          
          <img src={meetingIcon} alt="Meeting Icon" />
          <h2>Welcome!</h2>
          <p>
            Join virtual meetings, collaborate with your team, and stay connected wherever you are.
          </p>
          {/* Add more content as needed */}
        </HomeContent>
      </HomeContainer>
    </HrsForm>
  );
}

export default Home;
