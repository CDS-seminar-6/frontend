import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const InfoContainer = styled.div`
  background-color: ${theme.color.surfit_black_2};
  margin: 89.3rem 0 auto;
  width: 37.6rem;
  height: 75.2rem;
`;

function DirectoryInfo() {
  return (
    <InfoContainer>
      <div>안녕하세요</div>
    </InfoContainer>
  );
}

export default DirectoryInfo;
