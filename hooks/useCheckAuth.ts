import { RootState } from './../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const useCheckAuth = () => {
  const [success, setSuccess] = useState(true);
  const router = useRouter();
  const userInfo = useSelector((state: RootState) => state.userSlice.value);
  const TrainerInfo = useSelector((state: RootState) => state.trainerSlice.value);

  const fetchVerifyJwtToken = async () => {
    try {
      const {
        data: { result, info, type },
      } = await axios.get('/verify-jwt-token');

      if (!result) {
        // 토큰이 유효하지 않거나, 없는 경우
        setSuccess(false);
      } else {
        if (type === 'trainer') {
          // 트레이너인 경우
        } else {
          // 유저인 경우
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVerifyJwtToken();
  }, []);
};

export default useCheckAuth;
