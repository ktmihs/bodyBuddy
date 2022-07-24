import { loginEmail } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const getBrowserCookie = () => {
  const nameOfToken = 'jwt_Token';
  const cookieArr = document.cookie.split(';');

  for (const cookie of cookieArr) {
    const cookieIndex = cookie.split('=');
    if (cookieIndex.shift() === nameOfToken) {
      return cookieIndex.join('');
    }
  }

  return '';
};

const useCheckAuth = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchUserInfo = async (token: string) => {
    try {
      const {
        data: { user },
      } = await axios.get('http://localhost:8000/verify', {
        params: { token: token },
      });

      if (!user) {
        router.push('/signIn');
      } else {
        // 유저일 때
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const tokenInfo = getBrowserCookie();

    if (tokenInfo) {
      fetchUserInfo(tokenInfo);
    } else {
      router.push('/signIn');
    }
  }, []);

  return success;
};

export default useCheckAuth;
