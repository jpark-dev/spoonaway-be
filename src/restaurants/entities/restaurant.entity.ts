import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  // '() =>' can be replaced with 'typeIs =>'
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

  @Field(type => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(type => Boolean, { defaultValue: true }) // for graphQL
  @Column({ default: true }) // for DB
  @IsOptional() // validation
  @IsBoolean() // validation
  isGood: Boolean;

  @Field(typeIs => String)
  @Column()
  @IsString()
  address: string;
}
