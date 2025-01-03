import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphPublisher {
  constructor(private readonly app: any) {}

  async publish(publishOptions: any): Promise<void> {
    console.log('Publishing graph with options:', publishOptions);
    // will add logic further on evolving the proper logic
  }
}

