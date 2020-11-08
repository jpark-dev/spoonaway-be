import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  // '() =>' can be replaced with 'typeIs =>'
  @Field(typeIs => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(typeIs => String)
  @Column()
  name: string;

  @Field(typeIs => Boolean, { nullable: true })
  @Column()
  isGood?: Boolean;

  @Field(typeIs => String)
  @Column()
  address: string;

  @Field(typeIs => String)
  @Column()
  ownerName: string;
}
