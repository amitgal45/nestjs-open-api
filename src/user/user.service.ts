import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  getUsers() {
    return this.prismaService.user.findMany({
      include: {
        posts: true,
      },
    });
  }
  getUserById(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }
  createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data,
    });
  }
  createPost(data: Prisma.PostCreateInput) {
    return this.prismaService.post.create({
      data,
    });
  }
  updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return this.prismaService.user.update({
      data,
      where,
    });
  }
  deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.delete({
      where,
    });
  }
}
