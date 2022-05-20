import { React } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 34.3rem;
  margin: 1.6rem;
  display: flex;
  flex-direction: column;
`;
const MenuBtn = styled.button`
  width: 34.3rem;
  height: 5rem;
  margin-bottom: 1rem;
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.surfit_white};
`;
function MenuList() {
  return (
    <MenuContainer>
      <MenuBtn>서핏 프로필</MenuBtn>
      <MenuBtn>커리어 관리</MenuBtn>
      <MenuBtn>설정</MenuBtn>
    </MenuContainer>
  );
}
export default MenuList;
