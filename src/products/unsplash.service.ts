import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UnsplashService {
  private unsplash;

  constructor(private readonly configService: ConfigService) {
    const client = createApi({
      accessKey: configService.get<string>('UNSPLASH_ACCESS_KEY'),
    });

    this.unsplash = client;
  }

  async getPicture(subject: string): Promise<string> {
    const list = await this.unsplash.search.getPhotos({
      query: subject,
      page: 1,
      perPage: 1,
      orientation: 'portrait',
    });

    return list.response.results[0].urls.regular;
  }
}
