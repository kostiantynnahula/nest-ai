import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiController } from './open-ai.controller';
import { OpenAiService } from './open-ai.service';
import { ConfigModule } from '@nestjs/config';

describe('OpenAiController', () => {
  let controller: OpenAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [OpenAiController],
      providers: [OpenAiService],
    }).compile();

    controller = module.get<OpenAiController>(OpenAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
