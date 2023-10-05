import userSchema from '../../schemas/mongoose/userSchema.js'
import bcrypt from 'bcrypt'

async function createUser(name, email, password) {
  try {
    const newUser = new userSchema({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
      })
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export default createUser;
