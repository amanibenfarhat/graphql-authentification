import { Field, Int, ObjectType,ID } from '@nestjs/graphql';
import { Role } from 'src/roles/role.enum';
import { Document, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  
  @Prop({ required: true,unique: true, index: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({default: Role.user})
  roles: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);


/*@ObjectType()
export class User {

  /*@Field(() => ID)
  _id: String;*/

  /*@Field(type => String ,{ nullable: true })
  username: string;

  @Field(type => String ,{ nullable: true })
  password: string;

  @Field({defaultValue: "user",nullable: true})
  roles: Role;

}
export const UserSchema = SchemaFactory.createForClass(User);*/