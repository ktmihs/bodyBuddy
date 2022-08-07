import { getUserInfoByEmail } from '../api/firebase';
import axios from 'axios';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import next from 'next';

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

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

      const result = await getUserInfoByEmail('alswlkku@gmail.com');
      console.log(result);
      // const result = await isExistUserOrTrainer(email);
      // console.log(result);
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
