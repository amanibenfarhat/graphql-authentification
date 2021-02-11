import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDTO } from '../dto/createUser.dto';
import { GetUserDTO } from '../dto/GetUserDTO.dto';
import { User, UserDocument } from '../model/user.model';



@Injectable()
export class UserService {
    constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService,

    ) {}
    async getUsers()  {
        const users = await this.userModel.find().exec();
        return await users;
    }
    async addUser(createUserDTO : CreateUserDTO) : Promise<any>{
        const exist = await this.userModel.findOne({username : createUserDTO.username} ).exec();
        if(exist){
            return await "username exist !";
        }else{
            const user = new this.userModel(createUserDTO);
            const hashed = await this.authService.hashPassword(user.password);
            user.password = hashed;
            const saved_user = await user.save();
            const token = await this.authService.generateJWT(saved_user);
            return await token;
    }
       
        
    }
  
    async Login(createUserDTO : CreateUserDTO): Promise<any> {
        const user = await this.userModel.findOne({username : createUserDTO.username} ).exec();
        //console.log(user);
        if(!user){
            return 'wrong username taped';
        }else{
            if(await this.authService.comparePasswords(createUserDTO.password, user.password)){
                return  this.authService.generateJWT(user);
            }else{
                return 'wrong password inserted taped';
            }
            
            
        }
       
        
    }
  
   
 
}
