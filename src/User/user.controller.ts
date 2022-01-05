import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { User } from './User.entity';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-User.dto';
  import { UpdateUserDto } from './dto/update-User.dto';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get()
    get(): Promise<User[]> {
      return this.userService.get();
    }
  
    @Post()
    create(
      @Body() createUserDto: CreateUserDto,
    ): Promise<User> {
      return this.userService.create(createUserDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string): Promise<User> {
      return this.userService.delete(id);
    }
  }
  