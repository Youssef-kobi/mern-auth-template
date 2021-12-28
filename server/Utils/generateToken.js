import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const token = jwt.sign({ user: { id: id } }, process.env.JWT_SECRET_KEY);

  return token;
};

export default generateToken;
