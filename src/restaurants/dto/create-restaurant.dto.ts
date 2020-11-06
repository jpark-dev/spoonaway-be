import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
