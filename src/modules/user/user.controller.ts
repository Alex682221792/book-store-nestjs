import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return await this._userService.get(id);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return await this._userService.getAll();
  }

  @Post()
  async createUser(@Body() user: User): Promise<UserDto> {
    return await this._userService.create(user);
  }

  @Put(':id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: User) {
    await this._userService.update(id, user);
    return true;
  }

  @Put(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this._userService.delete(id);
    return true;
  }
}
