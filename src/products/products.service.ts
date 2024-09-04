import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        ...data,
        characteristics: data.characteristics as unknown as Prisma.JsonArray,
        variants: data.variants as unknown as Prisma.JsonArray,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        ...data,
        characteristics: data.characteristics as unknown as Prisma.JsonArray,
        variants: data.variants as unknown as Prisma.JsonArray,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
