import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (userData) => {
  const payload = {
    ...userData,
  };

  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: "1y" };

  let token = jwt.sign(payload, secret, options);

  return token;
};

export const verifyAccessToken = (token) => {
  const secret = process.env.JWT_SECRET;
  let decoded = jwt.verify(token, secret);
  return decoded;
};
