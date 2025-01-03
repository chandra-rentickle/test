import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphPublisher } from './graph-publisher';

async function bootstrap() {
  const shouldPublishGraph = process.env.PUBLISH_GRAPH === 'true';

  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    preview: shouldPublishGraph,
  });
  app.setGlobalPrefix('api');
  if (shouldPublishGraph) {
    await app.init();

    const publishOptions = {
      /* */
    }; // NOTE: this options object will vary depending on the CI/CD provider you're using
    const graphPublisher = new GraphPublisher(app);
    await graphPublisher.publish(publishOptions);

    await app.close();
  } else {
    await app.listen(3000);
  }
}
bootstrap();
