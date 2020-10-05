import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}


  async createUser({ name, email, password }: CreateUserInput): Promise<User> {
    const user = this.userRepository.create({
      name,
      email,
      password
    })

    await this.userRepository.save(user)

    return user
  }

  async findAllProviders(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users
  }
}
