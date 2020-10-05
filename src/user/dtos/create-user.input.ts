import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";



@InputType()
export class CreateUserInput {

  @IsString()
  @IsNotEmpty({ message: 'Field is required'})
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Field is required'})
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Field is required'})
  password: string;
}