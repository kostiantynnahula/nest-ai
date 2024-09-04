import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { productDetailsTemplate } from './helpers/templates/product.helper';
import { parseProductDetailsResponse } from './helpers/parser/product.helper';
import { UnsplashService } from './unsplash.service';

@Injectable()
export class OpenAiService {
  private client: OpenAI;

  constructor(
    private readonly configService: ConfigService,
    private readonly unsplashService: UnsplashService,
  ) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async productDetails(product: string): Promise<Record<string, any>> {
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-2024-08-06',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: productDetailsTemplate(product),
        },
      ],
      response_format: { type: 'json_object' },
    });

    const productDetails = parseProductDetailsResponse(completion);

    const picture = await this.unsplashService.getPicture(productDetails.name);

    return {
      ...productDetails,
      picture,
    };
  }
}
