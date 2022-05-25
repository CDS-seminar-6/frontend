import logo from 'assets/icon_logo.svg';
import profilePic from 'assets/mockup_profile.svg';
import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  padding 0 1.6rem;
  height: 3.2rem;
  font-size: 1.4rem;
  color: ${theme.colors.surfit_grey_3};
  margin: 5.2rem 0 auto;
`;

const Img = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

const Logo = styled(Img)`
  border: 1.5px solid ${theme.colors.surfit_white};
  border-radius: 10rem;
  rotate: 0.04deg;
  margin-right: 0.9rem;
`;
const Profile = styled(Img)`
  margin-left: 1.85rem;
`;

const SelectedCategory = styled.text`
  font-weight: 600;
  color: ${theme.colors.surfit_white};
`;

function Navbar() {
  return (
    <NavContainer>
      <Logo src={logo} />
      <SelectedCategory>홈 피드</SelectedCategory>
      <li>디렉토리</li>
      <li>채용</li>
      <li>커리어 관리</li>
      <Profile src={profilePic} />
    </NavContainer>
  );
}

export default Navbar;
