import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  private JWT_TOKEN = "jwtToken";
  
  getToken(): string {
    return window.localStorage.getItem(this.JWT_TOKEN);
  }

  saveToken(token: string) {
    window.localStorage[this.JWT_TOKEN] = token;
  }

  destroyToken() {
    window.localStorage.removeItem(this.JWT_TOKEN);
  }
}
