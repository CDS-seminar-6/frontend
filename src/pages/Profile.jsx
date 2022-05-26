import MenuList from 'components/common/MenuList';
import AlarmBar from 'components/profile/AlarmBar';
import ProfileContainer from 'components/profile/ProfileContainer';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function Profile() {
  return (
    <StyledRoot>
      <AlarmBar />
      <ProfileContainer />
      <MenuListWrapper>
        <MenuList />
      </MenuListWrapper>
    </StyledRoot>
  );
}

export default Profile;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.surfit_black_2};
`;

const MenuListWrapper = styled.div`
  width: 100%;
  padding: 0 2.8rem;
`;
