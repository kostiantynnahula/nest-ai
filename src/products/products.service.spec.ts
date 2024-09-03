import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './../prisma/prisma.module';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
