import bag from 'assets/icon_bag.svg';
import setting from 'assets/icon_setting.svg';
import surfing from 'assets/icon_surfing.svg';
import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function MenuList() {
  return (
    <MenuContainer>
      <MenuBtn>
        <MenuIcon src={surfing} alt="서핏프로필 아이콘" />
        서핏 프로필
      </MenuBtn>
      <MenuBtn>
        <MenuIcon src={bag} alt="커리어관리 아이콘" />
        커리어 관리
      </MenuBtn>
      <MenuBtn>
        <MenuIcon src={setting} alt="설정 아이콘" />
        설정
      </MenuBtn>
    </MenuContainer>
  );
}
export default MenuList;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuBtn = styled.button`
  width: 34.3rem;
  height: 5rem;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  background: none;
  color: ${theme.colors.surfit_white};
  display: flex;
  align-items: center;
`;
const MenuIcon = styled.img`
  display: inline-block;
  margin: 1.3rem 0.8rem 1.3rem 1.2rem;
`;
