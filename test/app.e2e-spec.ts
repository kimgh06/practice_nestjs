import { Test, TestingModule } from '@nestjs/testing';
import { HttpServer, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let server: any;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
    }));
    server = request(app.getHttpServer());
  });

  describe('/nice', () => {
    it('/ (GET)', () => {
      return server
        .get('/nice')
        .expect(200)
        .expect([]);
    });
    it('/ (POST)', () => {
      return server
        .post('/nice')
        .send({
          "title": "helloworL",
          "year": 1324,
          "genres": ["asdfasdf", "fefe"]
        })
        .expect(201)
    });
  })
});
