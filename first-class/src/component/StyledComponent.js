import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  min-height: 2rem;
  border: 0;
  border-radius: .5rem;
  min-width: 10rem;
  background-color: #61dafb;
  text-decoration: none;
`;

const MultiButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function StyledComponent() {
  return (
    <MultiButton>
      <Button>Error</Button>
      <Button>Update</Button>
      <Button>Remove</Button>
    </MultiButton>
  )
}