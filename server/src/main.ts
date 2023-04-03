import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().useStaticAssets(resolve(__dirname, "../../client/build"));
  app.getHttpAdapter().getInstance()
    .disable('X-Powered-By')
    .get("/*", async (req, res) => {
      const originalUrl: string = req.originalUrl;
      if (originalUrl.startsWith("/api/")) {
        req.next();
        return;
      }

      res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="http://localhost:3001/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="http://localhost:3001/logo192.png" />
           
          <link rel="manifest" href="http://localhost:3001/manifest.json" />
           
          <title>React App</title>
        <script defer src="http://localhost:3001/bundle.js"></script></head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
           
        </body>
      </html>
      `);
    });

  app.setGlobalPrefix('api', { exclude: ["app"] });

  await app.listen(3001);
}

bootstrap();
