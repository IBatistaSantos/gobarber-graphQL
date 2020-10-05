import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dtos/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor (
    private userService: UserService
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('data') {name, email, password}: CreateUserInput
  ): Promise<User> {
    const user = await this.userService.createUser({
      name,
      email,
      password
    })

    return user
  }

  @Query(() => [ User ])
  async providers(): Promise<User[]>{
    const providers = await this.userService.findAllProviders()
    return providers
  } 
}
