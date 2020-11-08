import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
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

  @Field(type => Boolean)
  @Column()
  @IsBoolean()
  isGood: Boolean;

  @Field(typeIs => String)
  @Column()
  @IsString()
  address: string;
}
