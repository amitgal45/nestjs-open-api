import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from 'src/common/base/base.controller';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO, CreateUserDTO } from './dto/createUser.dto';
import { CreateUserSubject } from './subject/createUser.subject';
import { useObjectInterceptors } from 'src/common/decorators/request';

@ApiTags('user')
@Controller('user')
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }
  @Get()
  async getUsers() {
    const res = await this.userService.getUsers();
    return res;
  }

  @Post()
  @useObjectInterceptors({ status: 201 }, CreateUserSubject)
  async createUser(@Body() user: CreateUserDTO) {
    const res = await this.userService.createUser(user);
    return this.transformObject(CreateUserSubject, res);
  }
  @Post('post')
  async createPost(@Body() user: CreatePostDTO) {
    const res = await this.userService.createPost(user);
    return res;
  }
}
