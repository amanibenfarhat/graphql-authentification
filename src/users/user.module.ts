import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver} from './resolver/user.resolver';
import { UserService } from './service/user.service';
import { User , UserSchema} from './model/user.model';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [MongooseModule.forFeature([{name : User.name , schema : UserSchema}]),AuthModule],
  controllers: [],
  providers: [UserResolver,UserService,],
})
export class UserModule {}
