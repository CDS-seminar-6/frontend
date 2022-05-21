import arrow_down from 'assets/icon_arrow_down.svg';
import MenuList from 'components/common/MenuList';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function DropDownBtn() {
  return (
    <StyledBtn>
      <span>서핏 프로필</span>
      <StyledIcon src={arrow_down} alt="드롭다운 버튼 이미지" />
    </StyledBtn>
  );
}
export default DropDownBtn;
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
