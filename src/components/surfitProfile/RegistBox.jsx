import checkIC from 'assets/icon_check.svg';
import crownIC from 'assets/icon_crown.svg';
import writingIC from 'assets/icon_writing.svg';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function RegistBox({ type }) {
  const boxInfo = {
    directory: {
      title: '디렉토리 등록',
      imgSrc: crownIC,
    },
    career: {
      title: '커리어 프로필 만들기',
      imgSrc: writingIC,
    },
  };

  return (
    <StyledRoot>
      <StyledImgWrapper>
        <img src={boxInfo[type].imgSrc} />
        <div />
      </StyledImgWrapper>
      <p>{boxInfo[type].title}</p>
      <StyledFooterWrapper>
        <p>지금 시작하기</p>
        <img src={checkIC} />
      </StyledFooterWrapper>
    </StyledRoot>
  );
}

export default RegistBox;

const StyledRoot = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  width: 34.3rem;
  height: 18.6rem;
  background-color: ${theme.colors.surfit_black_2};
  border-radius: 12px;
  padding: 0 2.4rem;
  & > p {
    color: ${theme.colors.surfit_white};
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 2.2rem;
  }
`;

const StyledImgWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
  background-color: ${theme.colors.surfit_black_3};
  border-radius: 12px;
  & > img {
    width: 3.2rem;
    height: 3.2rem;
  }
  & > div {
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-83%, -17%);
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${theme.colors.surfit_blue};
    border-radius: 50%;
  }
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.1rem;
  & > p {
    color: ${theme.colors.surfit_blue};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;
