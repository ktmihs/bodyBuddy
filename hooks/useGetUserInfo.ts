import { loginEmailAlreadyExisted } from 'redux/userSlice';
import { loginTrainerAlreadyExisted } from 'redux/trainerSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const useCheckAuth = () => {
  const [info, setUserInfo] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchVerifyJwtToken = async () => {
    try {
      const {
        data: { result, info, type },
      } = await axios.get('/verify-jwt-token');

      const payload = { ...info };

      if (!result) {
        // 토큰이 유효하지 않거나, 없는 경우
        window.alert('로그인 정보가 만료되었습니다');
        router.push('/signIn');
      } else {
        if (type === 'trainer') {
          // 트레이너인 경우
          dispatch(loginTrainerAlreadyExisted(payload));
          setUserInfo({ type: 'trainer', info });
        } else {
          // 유저인 경우
          dispatch(loginEmailAlreadyExisted(payload));
          setUserInfo({ type: 'user', info });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVerifyJwtToken();
  }, []);

  return info;
};

export default useCheckAuth;
