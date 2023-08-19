import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService) {}

  create(createVideoDto: CreateVideoDto) {
    this.prismaService.category.count({
      where: {
        id: createVideoDto.category_id,
      },
    });
  }

  findAll() {
    return `This action returns all videos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
