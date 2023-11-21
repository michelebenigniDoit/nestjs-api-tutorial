import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Hi I have signed up!' };
  }

  signin() {
    return { msg: 'Hi I have signed in!' };
  }
}
