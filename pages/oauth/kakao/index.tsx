import styled from '@emotion/styled';
import axios from 'axios';
import Router from 'next/router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginEmail, loginEmailAlreadyExisted } from 'redux/userSlice';

import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { loginTrainerAlreadyExisted } from 'redux/trainerSlice';

const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';

const SpinContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

const KakaoLogin = () => {
  const dispatch = useDispatch();

  const getToken = async (code: string | null) => {
    try {
      const {
        data: { access_token },
      } = await axios({
        url: `https://kauth.kakao.com/oauth/token`,
        method: 'post',
        params: {
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API,
          redirect_uri: REDIRECT_URI,
          code: code,
        },
      });

      getUserInfo(access_token);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserInfo = async (access_token: string) => {
    try {
      const {
        data: { result, userInfo, type },
      } = await axios({
        url: '/oAuth/kakao',
        method: 'post',
        data: { access_token: access_token },
        withCredentials: true,
      });

      if (result) {
        // 회원 데이터가 있는 경우
        if (type === 'trainer') {
          const payload = {
            ...userInfo,
            gender: userInfo.gender === 'female' ? false : true,
            signUpway: 'kakao',
          };

          dispatch(loginTrainerAlreadyExisted(payload));
        } else {
          const { city, thumbnail, gender, email, district, nickname } = userInfo;
          const payload = {
            email,
            name: nickname,
            gender: gender === 'female' ? false : true,
            thumbnail,
            city,
            district,
            signUpway: 'kakao',
          };

          dispatch(loginEmailAlreadyExisted(payload));
        }
        Router.push('/');
      } else {
        // 회원 데이터가 없는 경우
        const { email, nickname, gender } = userInfo;
        const payload = {
          email,
          name: nickname,
          gender: gender === 'female' ? false : true,
          signUpway: 'kakao',
        };

        dispatch(loginEmail(payload));
        Router.push('/signUp/checkCategory');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    getToken(code);
  }, []);

  return (
    <SpinContainer>
      <TailSpin height="70" width="70" color="#858FF1" ariaLabel="loading" />
    </SpinContainer>
  );
};

export default KakaoLogin;
