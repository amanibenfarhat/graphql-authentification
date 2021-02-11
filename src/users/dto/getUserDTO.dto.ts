import { Role } from 'src/roles/role.enum';
import { Field ,ID, ObjectType} from '@nestjs/graphql';
import { IsOptional,  } from 'class-validator';

@ObjectType()
export class GetUserDTO {
  @Field(() => ID,{nullable : true})
  readonly _id?: string;

  @Field({nullable : true})
  username: string;

  @Field({nullable : true})
  password: string;

  @Field({nullable : true})
  roles: Role;
}