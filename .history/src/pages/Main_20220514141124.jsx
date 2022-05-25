import Responsive from 'components/Responsive';
import React from 'react';
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';
import { theme } from 'styles/theme';

function Main() {
  return (
    <StyledRoot>
      <p>남준 세영 방가방가 ✋</p>
      <Responsive mobile>모바일 화면임둥</Responsive>
      <Responsive tablet>타블렛 화면임둥</Responsive>
      <Responsive desktop>데스크탑 화면임둥</Responsive>
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery('mobile')} {
    font-size: 3rem;
  }
  ${applyMediaQuery('tablet')} {
    font-size: 5rem;
  }
  font-size: 8rem;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.main};
`;
