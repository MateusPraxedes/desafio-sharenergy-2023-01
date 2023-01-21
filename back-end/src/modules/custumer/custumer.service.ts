import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CustumerDTO } from './custumer.dto';

@Injectable()
export class CustumerService {
  constructor(private prisma: PrismaService) {}

  async create(data: CustumerDTO) {
    const custumerExists = await this.prisma.customer.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    if (custumerExists) {
      throw new Error('User already exists');
    }

    const custumer = await this.prisma.customer.create({
      data,
    });
    return custumer;
  }

  async findAll() {
    return await this.prisma.customer.findMany();
  }

  async update(id: string, data: CustumerDTO) {
    const custumerExists = await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!custumerExists) {
      throw new Error('Customer not found');
    }

    return await this.prisma.customer.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const userExists = await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new Error('Customer not found');
    }

    return await this.prisma.customer.delete({
      where: {
        id,
      },
    });
  }
}
