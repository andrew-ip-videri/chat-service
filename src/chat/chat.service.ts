import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ChatService {
  constructor(private readonly configService: ConfigService) {}

  async sendMessage(message: string) {
    const baseUrl = this.configService.get<string>('NAVI_API_URL');
    const apiKey = this.configService.get<string>('NAVI_API_KEY');
    try {
      const { data } = await axios.post(
        `${baseUrl}/chat`,
        { message },
        { headers: { Authorization: `Bearer ${apiKey}` } },
      );
      return data;
    } catch (error: any) {
      return { error: 'Failed to reach Navi API', details: error.message };
    }
  }
}
