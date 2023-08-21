import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'upload/');
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9));
        },
      }),
    }),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
