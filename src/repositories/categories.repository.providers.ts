import { Category } from "src/entities/category.entity";

export const categoriesProviders = [
    {
        provide: 'CATEGORIES_REPOSITORY',
        useValue: Category,
    },
];