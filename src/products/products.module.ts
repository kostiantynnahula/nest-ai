import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from './../prisma/prisma.module';
import { OpenAiService } from './open-ai.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService, OpenAiService],
})
export class ProductsModule {}
