import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'I am signing up' };
  }

  signIn() {
    return { msg: 'I am signing in' };
  }
}
