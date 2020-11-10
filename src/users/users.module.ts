import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  // setting up a repository
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
