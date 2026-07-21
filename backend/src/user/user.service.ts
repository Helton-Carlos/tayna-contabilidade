import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser: UserEntity = {
      id: `usr-${Date.now()}`,
      ...createUserDto,
      role: createUserDto.role || 'USER',
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
