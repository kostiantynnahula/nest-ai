import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        ...data,
        characteristics: {
          create: [...data.characteristics],
        },
        variants: {
          create: [...data.variants],
        },
      },
      include: {
        characteristics: true,
        variants: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany({
      include: {
        characteristics: true,
        variants: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        characteristics: true,
        variants: true,
      },
    });
  }

  async update(id: string, data: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        ...data,
        characteristics: {
          create: [...data.characteristics],
        },
        variants: {
          create: [...data.variants],
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
