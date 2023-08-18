import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({
      data: createCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return this.prismaService.category.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, UpdateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: UpdateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.category.delete({
      where: {id}
    });
  }
}
