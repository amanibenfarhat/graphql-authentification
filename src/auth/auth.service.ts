import { Injectable } from '@nestjs/common';
import { User } from 'src/users/model/user.interface';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}
  
      async generateJWT(user: User) {
          return  await (this.jwtService.signAsync({user}));
      }
  
      async hashPassword(password: string): Promise <string> {
          return await<string>(bcrypt.hash(password, 12));
  
      }
  
      async comparePasswords(newPassword: string, passwortHash: string){
          return await (bcrypt.compare(newPassword, passwortHash));
      }
  }
