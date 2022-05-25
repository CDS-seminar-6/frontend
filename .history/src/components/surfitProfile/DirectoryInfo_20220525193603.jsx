import write from 'assets/icon_edit.svg';
import profilePic from 'assets/img_profile_big.svg';
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

const ProfileWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  margin: 1rem 0 auto;
  border-radius: 0.8rem;
`;

const Profile = styled.img`
  width: 100%;
  position: absolute;
`;

const ImgEdit = styled.button`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 20rem;
`;

const Input = styled.input`
  background-color: ${theme.colors.surfit_black_3};
  border: none;
  border-radius: 1.2rem;
  margin: 0 auto;
  padding-left: 1.8rem;
  width: 34.3rem;
  height: 6.3rem;
  color: ${theme.colors.surfit_white};
  font-size: 1.4rem;
`;

const Introduction = styled.textarea`
  background-color: ${theme.colors.surfit_black_3};
  border: none;
  border-radius: 1.2rem;
  margin: 1rem 0 auto;
  padding-left: 1.8rem;
  padding-top: 2.3rem;
  width: 34.3rem;
  height: 12.4rem;
  color: ${theme.colors.surfit_white};
  font-size: 1.4rem;
  resize: none;
`;

function DirectoryInfo() {
  return (
    <InfoContainer>
      <Title>디렉토리 정보</Title>
      <Contents>서핏에서 다양한 커리어 기회를 발견해보세요</Contents>
      <HeaderUnderline />
      <Title>내정보</Title>
      <Contents>프로필 사진</Contents>
      <ProfileWrapper>
        <Profile src={profilePic} alt="프로필 사진" />
        <ImgEdit type="submit">
          <img src={write} alt="버튼" />
        </ImgEdit>
      </ProfileWrapper>
      <Contents>이름</Contents>
      <Input placeholder="최인영" />
      <Contents>한 줄 소개</Contents>
      <Introduction placeholder="한줄소개를 입력해주세요(50자 이내)" />
    </InfoContainer>
  );
}

export default DirectoryInfo;
