import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[] | []> {
    return await this.prisma.user.findMany({});
  }

  async user(userWhere: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: userWhere.id,
      },
    });
  }

  async user_create(data: { email: string; name: string; pass?: string }) {
    return await this.prisma.user.create({
      data: {
        ...data,
        pass: {
          create: {
            password: data.pass,
          },
        },
      },
    });
  }
}
