import logo from 'assets/icon_logo.svg';
import profilePic from 'assets/mockup_profile.svg';
import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 34.3rem;
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
  border: 1.5px solid white;
  border-radius: 10rem;
  margin-right: 0.7rem;
  rotate: 0.04deg;
`;
const Profile = styled(Img)``;

const SelectedCategory = styled.text`
  font-weight: bold;
  color: ${theme.colors.surfit_white};
`;

function Navbar() {
  return (
    <NavContainer>
      <Logo src={logo} />
      <SelectedCategory className="HomeFeed">홈 피드</SelectedCategory>
      <li className="Directory">디렉토리</li>
      <li className="recruiting">채용</li>
      <li className="CareerManage">커리어 관리</li>
      <Profile src={profilePic} />
    </NavContainer>
  );
}

export default Navbar;
