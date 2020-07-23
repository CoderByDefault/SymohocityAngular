import { inject } from "@loopback/context";
import { HttpErrors, Request } from "@loopback/rest";
import { AuthenticationStrategy, UserProfile, TokenService } from "@loopback/authentication";
import { ToKenServiceBindings } from "../../keys";

export class JWTAuthenticationStrategy implements AuthenticationStrategy {
  name: string = "jwt";

  constructor(
    @inject(ToKenServiceBindings.TOKEN_SERVICE)
    public tokenService: TokenService,
  ) { }

  async authenticate(request: Request): Promise<UserProfile> {
    const token: string = this.extractCredentials(request);
    const UserProfile: UserProfile = await this.tokenService.verifyToken(token)
    return UserProfile;
  }
  extractCredentials(request: Request): string {
    if (!request.headers.authorization) throw new HttpErrors.Unauthorized(`Authorization not found`);
    const authHeaderValue = request.headers.authorization;
    if (!authHeaderValue.startsWith('Bearer')) throw new HttpErrors.Unauthorized(`Authoriation Header is not of type Bearer`);
    const parts = authHeaderValue.split(' ');
    if (parts.length !== 2) throw new HttpErrors.Unauthorized(`Authorization Headers has to many Parts`)

    return parts[1];
  }
}
