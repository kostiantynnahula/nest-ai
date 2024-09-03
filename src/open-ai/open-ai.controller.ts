import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { ChartGptDto } from './dto/chart-gpt-request.dto';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('product-details')
  async chat(@Body() body: ChartGptDto) {
    return await this.openAiService.productDetails(body.product);
  }
}
