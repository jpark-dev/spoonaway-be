import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { LoginInput } from './dto/login.dto';
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
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    // check new user -> mail.exists?
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // throw error
        return { ok: true, error: 'The user with that email already exists.' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      console.log(e);
      return { ok: false, error: 'Failed to create an account.' };
    }
    // if true, create user & hash pwd
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    // check if pwd matches
    // make a JWT and pass it to the client

    try {
      const user = await this.users.findOne({ email });
      if (!user) {
        return { ok: false, error: 'User does not exist.' };
      }
      const isPasswordCorret = await user.checkPassword(password);
      if (!isPasswordCorret) {
        return {
          ok: false,
          error: 'Wrong password.',
        };
      }
      return {
        ok: true,
        token: 'correct password! Here is your token.',
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
