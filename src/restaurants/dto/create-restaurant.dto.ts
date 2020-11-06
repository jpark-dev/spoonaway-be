import { ArgsType, Field } from '@nestjs/graphql';

// inputType() one object to pass to graphQL as an argument.
// argsType() several values can be passed to graphQL without being an object
@ArgsType()
export class CreateRestaurantDto {
  @Field(typeIs => String)
  name: string;

  @Field(typeIs => Boolean)
  isGood?: Boolean;

  @Field(typeIs => String)
  address: string;

  @Field(typeIs => String)
  ownerName: string;
}
