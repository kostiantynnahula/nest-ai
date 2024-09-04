import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './../prisma/prisma.module';
import { OpenAiService } from './open-ai.service';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let openAiService: OpenAiService;
  let productItemId: string;
  const productItemName = 'Samsung Galaxy S22 Ultra';
  const productItemUpdatedName = `${productItemName} updated`;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
      providers: [ProductsService, OpenAiService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    openAiService = module.get<OpenAiService>(OpenAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const productDetails = (await openAiService.productDetails(
      productItemName,
    )) as CreateProductDto;
    const product = await service.create(productDetails);
    productItemId = product.id;
    expect(openAiService).toBeDefined();
    expect(product.id).toBeDefined();
  }, 15000);

  it('should find all products', async () => {
    const products = await service.findAll();
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
  });

  it('should find a product', async () => {
    const product = await service.findOne(productItemId);
    expect(product).toBeDefined();
    expect(product.id).toBe(productItemId);
  });

  it('should update a product', async () => {
    const product = await service.update(productItemId, {
      name: productItemUpdatedName,
    });
    expect(product).toBeDefined();
    expect(product.id).toBe(productItemId);
    expect(product.name).toBe(productItemUpdatedName);
  });

  it('should delete a product', async () => {
    const product = await service.remove(productItemId);
    expect(product).toBeDefined();
    expect(product.id).toBe(productItemId);
  });
});
