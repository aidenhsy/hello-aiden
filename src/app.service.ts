import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(request: Request): string {
    console.log('get hello called by:', {
      ip: request.ip,
      method: request.method,
      url: request.url,
      headers: request.headers,
    });
    return 'Hello World 123!';
  }
}
