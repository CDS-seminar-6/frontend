import write from 'assets/icon_edit.svg';
import profilePic from 'assets/img_profile_big.svg';
import { client } from 'cores/api';
import useAPI from 'cores/hooks/useAPI';
import useInput from 'cores/useInput';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.surfit_black_2};
  width: 100%;
  padding-left: 1.6rem;
  margin-top: 2.4rem;
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
  margin: 1rem 0 0.4rem;
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
  margin-top: 1rem;
  padding-left: 1.8rem;
  width: 34.3rem;
  height: 6.3rem;
  color: ${theme.colors.surfit_white};
  font-size: 1.4rem;
  outline: 0;
`;

const Introduction = styled(Input)`
  padding-top: 2.3rem;
  height: 12.4rem;
  resize: none;
`;

const StyledSubmitBtn = styled.button`
  width: 34.3rem;
  height: 5.4rem;
  border: 0;
  outline: 0;
  border-radius: 27px;
  color: ${theme.colors.surfit_white};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  background-color: ${theme.colors.surfit_blue};
  margin: 2.4rem 0;
`;

function DirectoryInfo() {
  const { handleValue: handleName, ...name } = useInput();
  const { handleValue: handleIntro, ...intro } = useInput();
  const navigate = useNavigate();

  const { data } = useAPI({
    method: 'get',
    url: `/profile/6290810aafae9f02409bdf47`,
  });

  useEffect(() => {
    handleName(data && data.name);
    handleIntro(data && data.intro_message);
  }, [data]);

  const handleSubmit = async () => {
    await client.post('/profile/6290810aafae9f02409bdf47', {
      name: name.value,
      intro_message: intro.value,
    });

    navigate('/');
  };

  return (
    <InfoContainer>
      <Title>???????????? ??????</Title>
      <Contents>???????????? ????????? ????????? ????????? ??????????????????</Contents>
      <HeaderUnderline />
      <Title>?????????</Title>
      <Contents>????????? ??????</Contents>
      <ProfileWrapper>
        <Profile src={profilePic} alt="????????? ??????" />
        <ImgEdit type="submit">
          <img src={write} alt="??????" />
        </ImgEdit>
      </ProfileWrapper>
      <Contents>??????</Contents>
      <Input type="text" placeholder="????????? ??????????????????" {...name} />
      <Contents>??? ??? ??????</Contents>
      <Introduction as={'textarea'} placeholder="??????????????? ??????????????????(50??? ??????)" {...intro} />
      <StyledSubmitBtn onClick={handleSubmit}>????????? ??????</StyledSubmitBtn>
    </InfoContainer>
  );
}

export default DirectoryInfo;
