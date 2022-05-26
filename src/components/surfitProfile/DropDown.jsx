import arrow_down from 'assets/icon_arrow_down.svg';
import { ReactComponent as SVGClose } from 'assets/icon_close.svg';
import MenuList from 'components/common/MenuList';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function DropDown() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <StyledBtn onClick={() => setIsClicked(!isClicked)}>
        <span>서핏 프로필</span>
        <StyledIcon src={arrow_down} alt="드롭다운 버튼 이미지" />
      </StyledBtn>
      {isClicked && (
        <>
          <StyledBackground />
          <IconClose onClick={() => setIsClicked(!isClicked)} />
          <StyledModal>
            <span>메뉴 선택</span>
            <MenuList />
          </StyledModal>
        </>
      )}
    </>
  );
}
export default DropDown;
const StyledBtn = styled.button`
  width: 34.3rem;
  height: 6.3rem;
  margin: 1.6rem;
  padding: 0;
  border-radius: 1.2rem;
  border: none;
  background: ${theme.colors.surfit_black_2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    diplay: inline-block;
    color: ${theme.colors.surfit_white};
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 1.8rem;
  }
`;
const StyledIcon = styled.img`
  display: inline-block;
  margin: 2rem 1.8rem 1.9rem 0rem;
`;
const IconClose = styled(SVGClose)`
  position: absolute;
  top: 0;
  padding-left: 34.041rem;
  margin-top: 9.341rem;
  padding-right: 2.141rem;
  margin-bottom: 1.141rem;
  width: 37.5rem;
  cursor: pointer;
`;
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  width: 37.5rem;
  height: 100%;
  margin: auto;
  background: #000;
  opacity: 0.6;
`;
const StyledModal = styled.button`
  position: absolute;
  top: 0;
  width: 34.3rem;
  height: 60.2rem;
  margin: 11.8rem 1.6rem 0 1.6rem;
  padding: 2.8rem 0 0 2.4rem;
  border-radius: 1.2rem;
  border: none;
  background: ${theme.colors.surfit_black_2};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > span {
    display: inline-block;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    color: #ffffff;
    margin-bottom: 3.3rem;
  }
`;
