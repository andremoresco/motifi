import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://motifi.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:8180',
  issuer: 'https://motifi.us.auth0.com/',
  algorithms: ['RS256'],
  requestProperty: 'auth'
});

export { jwtCheck }
