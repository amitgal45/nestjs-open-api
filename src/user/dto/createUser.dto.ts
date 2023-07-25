import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePostDTO implements Prisma.PostCreateInput {
  //   constructor() {}
  //   @ApiProperty({ name: 'title' })
  //   title: string;
  //   _title: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  published: boolean;
  @ApiProperty()
  authorId: number;
}

export class CreateUserDTO implements Prisma.UserCreateInput {
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;

  //   @ApiProperty()
  //   override posts: CreatePostDTO[];
}
