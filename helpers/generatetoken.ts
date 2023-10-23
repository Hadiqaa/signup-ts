const dotenv = require('dotenv');
dotenv.config();
import jwt from 'jsonwebtoken';

console.log("hello checking!!", process.env.JWT_SECRET);
const generateToken = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || '');
};

export default generateToken;