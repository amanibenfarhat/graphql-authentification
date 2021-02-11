import { Role } from 'src/roles/role.enum';
import { Field, InputType ,ID} from '@nestjs/graphql';
import { IsOptional,  } from 'class-validator';

@InputType()
export class CreateUserDTO {
  /*@Field(() => ID,{nullable : true})
  readonly _id?: string;*/

  @Field({nullable : false})
  username: string;

  @Field({nullable : false})
  password: string;

  @Field({nullable : true})
  roles: Role;
}
