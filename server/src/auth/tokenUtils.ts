import { Token } from "#/token";
import jwt from "jsonwebtoken";
export class TokenUtils {
  private static _secretKey: string = process.env.JWT_SECRET || "default_secret";

  constructor() {
    if (!TokenUtils._secretKey) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
  }

  private static generateToken(data: Token, expiresIn: number = 3600): string {
    return jwt.sign(data, this._secretKey, { expiresIn });
  }

  //! Change the any
  private static verifyToken(token: string): any {
    try {
      const decoded = jwt.verify(token, this._secretKey) as { data: Token };
      return decoded.data;
    } catch (error) {
      console.error("Token verification failed:", error);
      throw new Error("Invalid token");
    }
  }
}