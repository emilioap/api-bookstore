import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {

    constructor(@Inject('CATEGORIES_REPOSITORY') private categoriesProviders: typeof Category) {
    }

    async getAll(): Promise<Category[]> {
        return await this.categoriesProviders.findAll<Category>();
    }

    async get(id: number): Promise<Category> {
        return this.categoriesProviders.findByPk<Category>(id);
    }

    async create(category: Category) {
        this.categoriesProviders.upsert<Category>(category);
    }

    async update(category: Category): Promise<[number, Category[]]> {
        return this.categoriesProviders.update<Category>(category, {
            where: {
                id: category.id
            }
        });
    }

    async delete(id: number) {
        const cat: Category = await this.get(id);
        cat.destroy();
    }

}
