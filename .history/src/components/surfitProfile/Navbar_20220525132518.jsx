import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const NavContainer = styled.ul`
  list-style: none;
`;

function Navbar() {
  return (
    <ul>
      <li>홈 피드</li>
      <li>디렉토리 관리</li>
      <li>채용</li>
      <li>커리어 관리</li>
    </ul>
  );
}

export default Navbar;
