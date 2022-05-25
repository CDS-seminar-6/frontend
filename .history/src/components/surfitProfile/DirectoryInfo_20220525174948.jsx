import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const InfoContainer = styled.div`
  position: absolute;
  background-color: ${theme.colors.surfit_black_2};
  margin: 89.3rem 0 auto;
  width: 37.6rem;
  height: 75.2rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;

function DirectoryInfo() {
  return (
    <InfoContainer>
      <div>안녕하세요</div>
    </InfoContainer>
  );
}

export default DirectoryInfo;
