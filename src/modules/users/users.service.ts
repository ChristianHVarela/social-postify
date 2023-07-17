import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user-dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}
  
  createUser(userDTO: CreateUserDto) {
    throw new Error('Method not implemented.');
  }
}
