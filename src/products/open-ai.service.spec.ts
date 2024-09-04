import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiService } from './open-ai.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UnsplashService } from './unsplash.service';

describe('OpenAiService', () => {
  let service: OpenAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [OpenAiService, ConfigService, UnsplashService],
    }).compile();

    service = module.get<OpenAiService>(OpenAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a response', async () => {
    const response = await service.productDetails('iPhone 15 Pro');
    expect(response).toBeDefined();
    expect(response.name).toBeDefined();
    expect(response.name).toMatch('iPhone 15 Pro');
    expect(response.description).toBeDefined();
    expect(response.picture).toBeDefined();
    expect(response.characteristics).toBeDefined();
    expect(response.characteristics.length).toBeGreaterThan(0);
    expect(response.characteristics[0].name).toBeDefined();
    expect(response.characteristics[0].description).toBeDefined();
    expect(response.variants).toBeDefined();
    expect(response.variants.length).toBeGreaterThan(0);
    expect(response.variants[0].color).toBeDefined();
  }, 10000);
});
