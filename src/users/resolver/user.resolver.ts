import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserDTO } from "../dto/createUser.dto";
import { GetUserDTO } from "../dto/GetUserDTO.dto";
import { UserService } from "../service/user.service";

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(returns => [GetUserDTO])
  async getUsers() {
    return this.userService.getUsers();
  }
  @Mutation(returns => String)
   async addUser(@Args('createUserDTO') createUserDTO: CreateUserDTO): Promise<any> {
    const user =   this.userService.addUser(createUserDTO);
    return user;
  }
  @Mutation(returns => String)
   async Login(@Args('createUserDTO') createUserDTO: CreateUserDTO): Promise<any> {
    const user =   this.userService.Login(createUserDTO);
    return user;
  }


  
 

}