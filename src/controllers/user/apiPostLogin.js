import { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } from '../../config/dotenv';
import getUserPassword from '../../dao/mongo/getUserPassword'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import logger from '../../utils/logger';

async function apiPostLogin(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const resp = await getUserPassword(email);
    logger.debug(resp)
    if (resp.password == null) {
      logger.debug("Login failed")
      return res.status(401).json({message: "Login failed"})
    }
    if (bcrypt.compareSync(password, resp.password)) {
      const payload = { _id: resp._id, email: resp.email};
      const accessToken = jwt.sign(payload , JWT_ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
      const refreshToken = jwt.sign(payload , JWT_REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
      return res.status(200).json({accessToken, refreshToken})
    } else {
      return res.status(401).json({message: "Login failed"})
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostLogin
