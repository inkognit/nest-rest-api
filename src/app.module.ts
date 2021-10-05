import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/ products.modules';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://michael:192837465@cluster0.cgj7r.mongodb.net/myFirstDatabase`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
