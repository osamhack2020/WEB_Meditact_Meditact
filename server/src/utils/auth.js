import '../env';
import jwt from 'express-jwt';

// Authorization : Bearer 'token' getter
const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

// Authorization middleware
const auth = {
  required: jwt({
    secret: process.env.SECRET_KEY,
    userProperty: 'payload',
    algorithms: ['HS256'],
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret: process.env.SECRET_KEY,
    userProperty: 'payload',
    algorithms: ['HS256'],
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  }),
};

export default auth;
