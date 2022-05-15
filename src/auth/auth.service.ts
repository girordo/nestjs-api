import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signUp() {
    return { msg: 'I am signing up' };
  }

  signIn() {
    return { msg: 'I am signing in' };
  }
}
