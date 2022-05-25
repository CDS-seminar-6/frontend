import { React } from 'react';
import logo from 'src/assets/icon_logo';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const NavContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 34.3rem;
  height: 3.2rem;
  font-size: 1.6rem;
  color: ${theme.colors.surfit_grey_3};
  margin: 0 0 auto;
`;

const Logo = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

function Navbar() {
  return (
    <NavContainer>
      <Logo src={Logo} />
      <li>홈 피드</li>
      <li>디렉토리 관리</li>
      <li>채용</li>
      <li>커리어 관리</li>
    </NavContainer>
  );
}

export default Navbar;