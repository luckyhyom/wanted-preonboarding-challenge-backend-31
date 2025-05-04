import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { TagModule } from './modules/tag/tag.module';
import { BrandModule } from './modules/brand/brand.module';
import { SellerModule } from './modules/seller/seller.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'shop',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SellerModule,
    BrandModule,
    TagModule,
  ],
})
export class AppModule {}
