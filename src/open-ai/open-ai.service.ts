import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  private client: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async chartGprRequest(message: string) {
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-2024-08-06',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `Generate a JSON object for an ${message} item based on the following schema { 
              "name": "string",
              "brand": "string",
              "category": "string",
              "price": "number", // in USD
              "description": "string",
              "characteristics": "Array<Record<string, string>>"
              "variants": [ { "color": "string" } ] 
            }`,
        },
      ],
      response_format: { type: 'json_object' },
    });

    // console.log(JSON.parse(completion.choices[0].message.content));

    return completion;
  }
}
