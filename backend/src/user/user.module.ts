import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashingService } from '../../common/services/hashing.service';

@Module({
  controllers: [UserController],
  providers: [UserService, HashingService],
})
export class UserModule {}
