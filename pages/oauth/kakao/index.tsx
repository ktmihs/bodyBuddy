import axios from 'axios';

import { useEffect } from 'react';

const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';

const KakaoLogin = () => {
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
      const header = {
        Authorization: `Bearer ${access_token}`,
      };

      const result = await axios({
        url: 'https://kapi.kakao.com/v2/user/me',
        method: 'get',
        headers: header,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    getToken(code);
  }, []);
  return;
};

export default KakaoLogin;
