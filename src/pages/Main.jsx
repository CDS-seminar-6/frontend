import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Main() {
  return (
    <StyledRoot>
      <p>남준 세영 방가방가 ✋</p>
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.surfit_blue};
`;
