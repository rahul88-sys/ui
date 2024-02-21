import React from 'react';
import HrsForm from '../Layout/HrsForm';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

// Create a styled component for the Contact component
const StyledContact = styled('div')({
  // Add your styles here
  padding: '20px',
  backgroundColor: '#f0f0f0',
  // Add more styles as needed
});

const Contact = () => {
  return (
    <StyledContact>
      <HrsForm>
        <TextField label="Name" fullWidth variant="outlined" margin="normal" />
        <TextField label="Email" fullWidth variant="outlined" margin="normal" />
        <Button>Send</Button>
      </HrsForm>
    </StyledContact>
  );
};

export default Contact;
