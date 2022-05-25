import logo from 'assets/icon_logo.svg';
import profilePic from 'assets/mockup_profile.svg';
import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  align-content: space-between;
  list-style: none;
  width: 34.3rem;
  height: 3.2rem;
  font-size: 1.6rem;
  color: ${theme.colors.surfit_grey_3};
  margin: 5.2rem 0 auto;
`;

const LogoAndProfile = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

function Navbar() {
  return (
    <NavContainer>
      <LogoAndProfile src={logo} />
      <li>홈 피드</li>
      <li>디렉토리</li>
      <li>채용</li>
      <li>커리어 관리</li>
      <LogoAndProfile src={profilePic} />
    </NavContainer>
  );
}

export default Navbar;
