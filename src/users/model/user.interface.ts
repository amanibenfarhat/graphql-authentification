import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export interface User extends Document {
    username: string;
    password: string;
    roles: Role;   
}

