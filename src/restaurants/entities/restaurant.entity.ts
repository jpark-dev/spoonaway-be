import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  // '() =>' can be replaced with 'typeIs =>'
  @Field(typeIs => String)
  name: string;

  @Field(typeIs => Boolean, { nullable: true })
  isGood?: Boolean;

  @Field(typeIs => String)
  address: string;

  @Field(typeIs => String)
  ownerName: string;
}
