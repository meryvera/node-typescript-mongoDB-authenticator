import crypto from 'crypto';

const SECRET = 'NODE-TS-REST-API';

export const authentication = (salt: string, password: string): string => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

export const random = () => crypto.randomBytes(128).toString('base64'); 
// esto lo hace digerible a la BD