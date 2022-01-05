import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async get(): Promise<User[]> {
    const user = await this.userRepository.find();
    return user;
  }

  async create(createuserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(createuserDto);
    return await this.userRepository.save(user);
  }

  async update(
    id: string,
    updateuserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.findOne(id);
    const editeduser = Object.assign(
      user,
      updateuserDto,
    );
    return await this.userRepository.save(editeduser);
  }

  async delete(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return await this.userRepository.softRemove(user);
  }
}
