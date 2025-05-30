import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'frog',
      synchronize: true,
      autoLoadEntities: true,
      // 若实体在 src/entity 目录，确保路径匹配
      entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
    }),
    CourseModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
