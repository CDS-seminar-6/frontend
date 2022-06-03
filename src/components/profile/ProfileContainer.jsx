import { ReactComponent as IconPlus } from 'assets/icon_plus.svg';
import { ReactComponent as SVGProfile } from 'assets/img_profile_small.svg';
import useAPI from 'cores/hooks/useAPI';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
function ProfileContainer() {
  const { data } = useAPI({
    method: 'get',
    url: `/profile/6290810aafae9f02409bdf47`,
  });

  return (
    <>
      <ProfileHeader>
        <SVGProfile />
        <ProfileInfo>
          <span>{data && data.name}</span>
          <div>{(data && data.intro_message) || `한 줄 소개를 입력해주세요 (50자 이내)`}</div>
          {/* 한줄 소개 없으면 기본 메세지 출력 */}
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
  justify-content: center;
  margin-left: 1.2rem;
  gap: 0.6rem;

  & > span {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${theme.colors.surfit_white};
  }
  & > div {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${theme.colors.surfit_grey_3};
  }
`;
const PlusBtn = styled.button`
  display: flex;
  align-items: center;
  width: 34.3rem;
  height: 5rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  background-color: ${theme.colors.surfit_black_2};
  margin-top: 2.6rem;
  padding-left: 1.2rem;
  color: ${theme.colors.surfit_white};
  gap: 0.8rem;
  border: 1px solid ${theme.colors.surfit_grey_1};
  border-radius: 6px;
  margin-bottom: 1.6rem;
`;
