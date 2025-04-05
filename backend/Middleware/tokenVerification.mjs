import jwt from "jsonwebtoken";
import "dotenv/config";

const tokenVerification = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).send({ status: 401, message: "Unauthorize Access" });
    }
  
    const token = authHeader.split(" ")[1];    
    if (req.headers?.authorization) {
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user=decoded
      if (decoded) {
        next();
      } else {
        res.status(401).send({ status: 401, message: "Unauthorize Access" });
      }
    } else {  
      res.status(401).send({ status: 401, message: "Unauthorize Access" });
    }
  } catch (err) {
    res
      .status(401)
      .send({ err: err, status: 401, message: "Unauthorize Access" });
  }
};
export default tokenVerification;
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;  // Ensure req.user is set
//     next();
//   } catch (error) {
//     return res.status(403).json({ error: "Forbidden: Invalid token" });
//   }
// };

// export default tokenVerification