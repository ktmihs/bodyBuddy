import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
}
// console.log(jwt);
export const makeToken = (collectionId: string) => {
  const TOKEN_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';
  const token = jwt.sign(
    {
      id: collectionId,
    },
    TOKEN_KEY,
    {
      subject: 'bodyBuddy jwtToken',
      expiresIn: '60m',
      issuer: 'bodyBuddy',
    }
  );

  return token;
};

export const verifyToken = (clientToken: string) => {
  const decode = jwt.verify(
    clientToken,
    String(process.env.NEXT_PUBLIC_JWT_SECRET_KEY)
  ) as JwtPayload;

  //   // 유효성 검사 통과
  if (decode) {
    const userId = decode.id;
    return userId;
  } else {
    return null;
  }
};
