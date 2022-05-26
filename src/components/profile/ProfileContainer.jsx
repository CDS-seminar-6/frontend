import { ReactComponent as IconPlus } from 'assets/icon_plus.svg';
import { ReactComponent as SVGProfile } from 'assets/img_profile_small.svg';
import React from 'react';
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
      <PlusBtn>
        <IconPlus />
        <span>커리어 피드 추가</span>
      </PlusBtn>
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
    color: ${theme.colors.surfit_white};
  }
  & > div {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${theme.colors.surfit_grey_3};
  }
`;
const PlusBtn = styled.button`
  width: 34.3rem;
  height: 5rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  background: none;
  margin-top: 2.6rem;
  padding-left: 1.468rem;
  color: ${theme.colors.surfit_white};
  display: flex;
  gap: 1.068rem;
  align-items: center;
  border: 1px solid ${theme.colors.surfit_grey_1};
  border-radius: 0.6rem;
`;
