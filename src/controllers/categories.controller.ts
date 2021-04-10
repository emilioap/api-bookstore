import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){
    }

    @Get('getall')
    async getAll(): Promise<Category[]> {
        return this.categoriesService.getAll();
    }

    @Get(':id')
    async get(@Param() params): Promise<Category> {
        return this.categoriesService.get(params.id);
    }

    @Post()
    async create(@Body() category: Category) {
        return this.categoriesService.create(category);
    }

    @Put()
    async update(@Body() category: Category): Promise<[number, Category[]]> {
        return this.categoriesService.update(category);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return this.categoriesService.delete(params.id);
    }
}