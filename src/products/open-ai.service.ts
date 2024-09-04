import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { productDetailsTemplate } from './helpers/templates/product.helper';
import { parseProductDetailsResponse } from './helpers/parser/product.helper';

@Injectable()
export class OpenAiService {
  private client: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async productDetails(product: string) {
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

    return parseProductDetailsResponse(completion);
  }
}
