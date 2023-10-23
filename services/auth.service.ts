import bcrypt from 'bcrypt';
import User from '../models/user.model';
import generateToken from '../helpers/generatetoken';

interface AuthServiceInterface {
  signup( username: string, email: string,password: string ): Promise<{ id: number; username: string; email: string }>;
  loginUser(email: string, password: string): Promise<{ user: User | null; token: string }>;
  getUserByEmail(email: string): Promise<User | null>;
}

const signup = async(username: string, email: string, password: string): Promise<{ id: number; username: string; email: string; token: string; }> => {
  try {

    const user = await getUserByEmail(email);
    if (user) {
      throw new Error("User already exists");
    }
    const hashpass = await bcrypt.hash(password, 8);

    const newuser = await User.create({
      username,
      email,
      password: hashpass,
    });

    const token = generateToken(newuser.id);

    return {
      id: newuser.id,
      username: newuser.username,
      email: newuser.email,
      token,
    };
  } catch (error) {
    throw error;
  }
}

const loginUser = async (email: string, password: string): Promise<{ user: User | null; token: string }> => {
  try {
    const user = await getUserByEmail(email);
    
    if (!user) {
      throw new Error("User does not exist");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid Credentials");
    }
    const token = generateToken(user.id);


    return { user, token };
  } catch (error) {
    throw error;
  }
}

const  getUserByEmail = async (email: string): Promise<User | null>  => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export default { signup, loginUser, getUserByEmail };


