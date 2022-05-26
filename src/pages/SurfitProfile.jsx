import ArticleBox from 'components/surfitProfile/ArticleBox';
import DirectoryInfo from 'components/surfitProfile/DirectoryInfo';
import DropDown from 'components/surfitProfile/DropDown';
import Navbar from 'components/surfitProfile/Navbar';
import RegistBox from 'components/surfitProfile/RegistBox';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function SurfitProfile() {
  return (
    <StyledRoot>
      <Navbar />
      <DropDown />
      <p>기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요</p>
      <ArticleBox />
      <RegistBox type="directory" />
      <RegistBox type="career" />
      <DirectoryInfo />
    </StyledRoot>
  );
}

export default SurfitProfile;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: ${theme.colors.surfit_black_1};

  & > p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${theme.colors.surfit_grey_2};
    margin-bottom: 3rem;
    padding: 0 1.6rem;
  }
`;
