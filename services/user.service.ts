import User from '../models/user.model';
console.log("hello",User);

interface UserModel {
  id: number;
  username: string;
  email: string;
}


const getUserById = async (id: number): Promise<UserModel | null> => {
  try {
    const user = await User.findByPk(id);
    return user ? user.toJSON() : null;
  } catch (error) {
    throw error;
  }
};



const updateName = async (userId: number, newUsername: string): Promise<UserModel | null> => {
  try {
    const user = await getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update the username
    user.username = newUsername;
    await User.update({ username: newUsername }, { where: { id: userId } });

    return user;
  } catch (error) {
    throw error;
  }
};


// Function to get all users
const getAllUsers = async (): Promise<UserModel[]> => {
  try {
    const users = await User.findAll();
    return users.map((user) => user.toJSON());
  } catch (error) {
    throw error;
  }
};

export default { getAllUsers, updateName };