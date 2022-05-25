import write from 'assets/icon_writng.svg';
import profilePic from 'assets/mockup_profile.svg';
import { React } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const InfoContainer = styled.div`
  position: absolute;
  background-color: ${theme.colors.surfit_black_2};
  margin: 89.3rem 0 auto;
  width: 37.6rem;
  height: 75.2rem;
  padding-left: 1.6rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${theme.colors.surfit_white};
  margin: 2.4rem 0 auto;
`;

const Contents = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.surfit_grey_2};
  margin: 2rem 0 auto;
`;

const HeaderUnderline = styled.hr`
  width: 34.3rem;
  margin: 1.6rem 0 auto;
  border: 1px solid ${theme.colors.surfit_black_3};
`;

const Profile = styled.div``;
const ProfileWrapper = styled.div``;

function DirectoryInfo() {
  return (
    <InfoContainer>
      <Title>디렉토리 정보</Title>
      <Contents>서핏에서 다양한 커리어 기회를 발견해보세요</Contents>
      <HeaderUnderline />
      <Title>내정보</Title>
      <Contents>프로필 사진</Contents>
      <ProfileWrapper />
      <Contents>이름</Contents>
      <Contents>한 줄 소개</Contents>
    </InfoContainer>
  );
}

export default DirectoryInfo;
