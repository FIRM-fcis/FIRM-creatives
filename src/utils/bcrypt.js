import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const validPassword = await bcrypt.compare(password, hashedPassword);
    return validPassword;
  } catch (error) {
    console.log(error);
  }
};
