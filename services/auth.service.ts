import bcrypt from 'bcrypt';
import User from '../models/user.model';

class AuthService {
    static async signup (
        username:string,
        email:string,
        password:string
    ) {
        try {
        const hashpass = await bcrypt.hash(password, 10);

        const user = await User.create ({
          username,
          email,
          password: hashpass
        });

    return user;

    } catch(error) {
        throw new Error('Error in signup');
    }

    }
}

export default AuthService;