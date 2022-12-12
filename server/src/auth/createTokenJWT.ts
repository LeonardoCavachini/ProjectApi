import * as jwt from 'jsonwebtoken';
require('dotenv').config();

export default class Token {
  static createToken(searchUser: string) {
    const dataEmail = searchUser;
    const { SECRET_KEY } = process.env;

    const token = jwt.sign({}, SECRET_KEY, {
      subject: dataEmail,
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return token;
  }
}
