import MenuList from 'components/common/MenuList';
import ProfileContainer from 'components/profile/ProfileContainer';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function Profile() {
  return (
    <StyledRoot>
      <p>메인페이지</p>
      <ProfileContainer />
    </StyledRoot>
  );
}

export default Profile;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.surfit_black_2};
`;
