import arrow_down from 'assets/icon_arrow_down.svg';
import { ReactComponent as SVGClose } from 'assets/icon_close.svg';
import MenuList from 'components/common/MenuList';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function DropDown() {
  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => setIsClicked(!isClicked);

  return (
    <StyledRoot>
      <StyledBtn onClick={toggle}>
        <span>서핏 프로필</span>
        <StyledIcon src={arrow_down} alt="드롭다운 버튼 이미지" />
      </StyledBtn>
      {isClicked && (
        <StyledBackground>
          <StyledModal>
            <IconClose onClick={toggle} />
            <span>메뉴 선택</span>
            <MenuList />
          </StyledModal>
        </StyledBackground>
      )}
    </StyledRoot>
  );
}
export default DropDown;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  margin: 3.2rem 0 2.4rem;
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 34.3rem;
  height: 6.3rem;
  padding: 0;
  border-radius: 1.2rem;
  border: none;
  background: ${theme.colors.surfit_black_2};
  align-items: center;

  & > span {
    color: ${theme.colors.surfit_white};
    font-size: 1.6rem;
    font-weight: 600;
    margin-left: 1.8rem;
  }
`;
const StyledIcon = styled.img`
  margin-right: 1.8rem;
`;

const IconClose = styled(SVGClose)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: -0.6rem;
  left: 100%;
  transform: translate(-100%, -100%);
  cursor: pointer;
`;
const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: -7.2rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 7.2rem;
  width: 34.3rem;
  height: 60.2rem;
  border-radius: 12px;
  border: none;
  background: ${theme.colors.surfit_black_2};

  & > span {
    font-weight: 600;
    font-size: 1.6rem;
    color: ${theme.colors.surfit_white};
    margin: 2.8rem 2.4rem 2rem;
  }
`;
