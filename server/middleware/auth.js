import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("token");
  // console.log(req)
  if (!token) return res.status(401).json({ message: "Auth Error" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(` Decoded Token${decoded}`)
    req.user = decoded.user
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};

export default auth;
