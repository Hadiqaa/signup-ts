import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import  User from '../models/user.model'; 

interface CustomRequest extends Request {
  user?: any;
}


const protect = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  let token: string | undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as Secret); 
      req.user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] }, 
      });

      next();
    } catch (error) {
      res.status(401).send('Not authorized, token has failed');
    }
  }

  if (!token) {
    res.status(401).send('Not authorized, no token');
  }
};

export default protect ;