import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function SurfitProfile() {
  return <StyledRoot>서핏프로필</StyledRoot>;
}

export default SurfitProfile;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.surfit_black_1};
`;
