import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('Desafio Final - Globotech Academy')
        .setDescription(
            'Autores: Nathália Guimarães, Gabriel Martins, Ricardo Luis,  Thais Minas',
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('', app, document);

    await app.listen(3333);
}
bootstrap();
