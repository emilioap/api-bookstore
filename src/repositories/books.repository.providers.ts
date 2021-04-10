import { Book } from "src/entities/books.entity";

export const booksProviders = [
    {
        provide: 'BOOKS_REPOSITORY',
        useValue: Book,
    },
];