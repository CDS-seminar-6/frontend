import sleepingIC from 'assets/icon_sleeping.svg';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function ArticleBox() {
  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledImgWrapper>
          <img src={sleepingIC} />
        </StyledImgWrapper>
        <p>0</p>
      </StyledWrapper>
      <p>아티클을 거의 읽지 않았어요</p>
      <p>지난주 아티클 탐색 4개 이하</p>
    </StyledRoot>
  );
}

export default ArticleBox;

const StyledRoot = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 34.3rem;
  height: 18.6rem;
  background-color: ${theme.colors.surfit_black_2};
  border-radius: 12px;
  padding: 0 2.4rem;
  & > p:nth-child(2) {
    color: ${theme.colors.surfit_white};
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 2.2rem;
  }
  & > p:last-child {
    color: ${theme.colors.surfit_grey_2};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-top: 0.8rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 2.6rem;
    color: ${theme.colors.surfit_white};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    background-color: ${theme.colors.surfit_black_3};
    border-radius: 8px;
  }
`;

const StyledImgWrapper = styled.div`
  display: flex;
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
`;
