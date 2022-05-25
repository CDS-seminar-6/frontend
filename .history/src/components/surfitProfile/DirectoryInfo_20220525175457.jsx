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
  font-weight: bold;
  color: ${theme.colors.surfit_white};
  margin: 2.4rem 0 auto;
`;

const Contents = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.surfit_grey_2};
`;

function DirectoryInfo() {
  return (
    <InfoContainer>
      <Title>디렉토리 정보</Title>
      <Contents>서핏에서 다양한 커리어 기회를 발견해보세요</Contents>
    </InfoContainer>
  );
}

export default DirectoryInfo;
