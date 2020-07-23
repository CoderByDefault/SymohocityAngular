import { inject } from '@loopback/context';
import { HttpErrors } from '@loopback/rest';
import { promisify } from 'util';
import { TokenService, UserProfile } from '@loopback/authentication';
import { ToKenServiceBindings } from '../keys';
import { MyUserProfile } from "./customUserProfile";

const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

export class JWTService implements TokenService {
  constructor(
    @inject(ToKenServiceBindings.TOKEN_SECRET) private jwtSecret: string,
    @inject(ToKenServiceBindings.TOKEN_EXPIRES_IN) private jwtExpiresIn: string,
  ) { }

  async verifyToken(token: string): Promise<UserProfile> {
    if (!token) {
      throw new HttpErrors.Unauthorized("error verifying token")
    }

    let userProfile: UserProfile;
    try {
      const decryptedToken = await verifyAsync(token, this.jwtSecret)
      userProfile = Object.assign(
        { id: decryptedToken.id, name: decryptedToken.name },
      );
    } catch (error) {
      throw new HttpErrors.Unauthorized(`Error Veryfing Token ${error.message}`);
    }
    return userProfile;
  }
  async generateToken(userProfile: MyUserProfile): Promise<string> {
    if (!userProfile) throw new HttpErrors.Unauthorized("Profile is empty");
    let token: string;
    try {
      token = await signAsync(userProfile, this.jwtSecret, {
        expiresIn: Number(this.jwtExpiresIn)
      })
    } catch (error) { throw new HttpErrors.Unauthorized(`Error encoding token ${error}`) }
    return token;
  }
}
