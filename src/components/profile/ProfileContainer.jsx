import arrow_down from 'assets/icon_arrow_down.svg';
import { ReactComponent as SVGProfile } from 'assets/img_profile_small.svg';
import MenuList from 'components/common/MenuList';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function ProfileContainer() {
  return (
    <>
      <ProfileHeader>
        <SVGProfile />
        <ProfileInfo>
          <span>최인영</span>
          <div>한 줄 소개를 입력해주세요 (50자 이내)</div>
        </ProfileInfo>
      </ProfileHeader>
    </>
  );
}
export default ProfileContainer;

const ProfileHeader = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;

  justify-content: center;
`;
const ProfileInfo = styled.div`
  width: 28.3rem;
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  gap: 0.6rem;
  & > span {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #ffffff;
  }
  & > div {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #7a7c85;
  }
`;
