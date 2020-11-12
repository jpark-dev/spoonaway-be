import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    // check new user -> mail.exists?
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // throw error
        return 'The user with that email already exists.';
      }
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      console.log(e);
      return 'Failed to create an account.';
    }
    // if true, create user & hash pwd
  }
}
