import jwt from 'jsonwebtoken';

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
