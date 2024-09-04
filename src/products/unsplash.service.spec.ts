import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiService } from './open-ai.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UnsplashService } from './unsplash.service';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [OpenAiService, ConfigService, UnsplashService],
    }).compile();

    service = module.get<UnsplashService>(UnsplashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a response', async () => {
    const response = await service.getPicture('iphone');
    expect(response).toBeDefined();
    expect(response.length).toBeGreaterThan(0);
  });
});
