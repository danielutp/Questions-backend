import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  async get(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    const editedCategory = Object.assign(
      category,
      updateCategoryDto,
    );
    return await this.categoryRepository.save(editedCategory);
  }

  async delete(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    return await this.categoryRepository.softRemove(category);
  }
}
