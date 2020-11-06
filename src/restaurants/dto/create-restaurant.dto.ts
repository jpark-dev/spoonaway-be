import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

// inputType() one object to pass to graphQL as an argument.
// argsType() several values can be passed to graphQL without being an object
@ArgsType()
export class CreateRestaurantDto {
  @Field(typeIs => String)
  @IsString()
  @Length(5, 15)
  name: string;

  @Field(typeIs => Boolean)
  @IsBoolean()
  isGood?: Boolean;

  @Field(typeIs => String)
  @IsString()
  address: string;

  @Field(typeIs => String)
  @IsString()
  ownerName: string;
}
