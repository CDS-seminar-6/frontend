import { ReactComponent as SVGClose } from 'assets/icon_close.svg';
import MenuList from 'components/common/MenuList';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function DropDownMenu() {
  return (
    <>
      <StyledBackground />
      <IconClose />
      <StyledModal>
        <span>메뉴 선택</span>
        <MenuList />
      </StyledModal>
    </>
  );
}
export default DropDownMenu;

const IconClose = styled(SVGClose)`
  position: absolute;
  top: 0;
  padding-left: 34.041rem;
  margin-top: 9.341rem;
  padding-right: 2.141rem;
  margin-bottom: 1.141rem;
  width: 37.5rem;
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
