import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { Category } from './category.entity';
  import { CategoriesService } from './categories.service';
  import { CreateCategoryDto } from './dto/create-category.dto';
  import { UpdateCategoryDto } from './dto/update-category.dto';
  
  @Controller('categories')
  export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
  
    @Get()
    get(): Promise<Category[]> {
      return this.categoriesService.get();
    }
  
    @Post()
    create(
      @Body() createCategoryDto: CreateCategoryDto,
    ): Promise<Category> {
      return this.categoriesService.create(createCategoryDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateCategoryDto: UpdateCategoryDto,
    ) {
      return this.categoriesService.update(id, updateCategoryDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string): Promise<Category> {
      return this.categoriesService.delete(id);
    }
  }
  