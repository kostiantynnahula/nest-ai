import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        OPENAI_API_KEY: Joi.string().required(),
      }),
    }),
    OpenAiModule,
    ProductsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
