import { getTrainerInfoById, getUserInfoById } from './../api/firebase';
import { makeToken, verifyToken } from './jwtToken/index';
import { isExistUserOrTrainer } from '../api/firebase';
import axios from 'axios';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import next from 'next';
import cookieParser from 'cookie-parser';

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cookieParser());

  server.post('/oAuth/kakao', async (req: Request, res: Response) => {
    try {
      const { access_token } = req.body;

      const {
        data: { kakao_account },
      } = await axios.get('https://kapi.kakao.com/v2/user/me', {
        params: { secure_resource: true, property_key: ['kakao_account.email'] },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const {
        email,
        profile: { nickname },
        gender,
      } = kakao_account;

      const result = await isExistUserOrTrainer(email);

      if (!result) {
        // 유저가 없는 경우,
        res.send({ result: false, userInfo: { email, nickname, gender } });
      } else {
        const { id, data, type } = result;
        const token = makeToken(String(id));
        res.cookie('jwt_Token', token);
        res.send({
          result: true,
          userInfo: data,
          type,
        });
      }
    } catch (e) {
      console.log(e);
    }
  });

  server.get('/verify-jwt-token', async (req: Request, res: Response) => {
    try {
      const { jwt_Token } = req.cookies;
      if (!jwt_Token) {
        // token이 없는 경우
        res.send({ result: false, info: null, type: null });
        return;
      }

      const result = verifyToken(String(jwt_Token));
      if (!result) {
        // token이 유효하지 않은 경우
        res.send({ result: false, info: null, type: null });
        res.cookie('jwt_Token', '');
        return;
      }

      const userInfo = await getUserInfoById(result);

      if (userInfo) {
        res.send({ result: true, info: userInfo, type: 'user' });
        return;
      }

      const trainerInfo = await getTrainerInfoById(result);

      if (trainerInfo) {
        res.send({ result: true, info: trainerInfo, type: 'trainer' });
        return;
      }
    } catch (e) {
      console.log(e);
    }
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
  });
});
