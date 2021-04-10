import { Inject, Injectable } from '@nestjs/common';
import { Book } from 'src/entities/books.entity';

@Injectable()
export class BooksService {

    constructor(@Inject('BOOKS_REPOSITORY') private booksRepository: typeof Book) {
    }

    async getAll(): Promise<Book[]> {
        return await this.booksRepository.findAll<Book>();
    }

    async get(id: number): Promise<Book> {
        return this.booksRepository.findByPk<Book>(id);
    }

    async create(book: Book) {
        this.booksRepository.upsert<Book>(book);
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.booksRepository.update<Book>(book, {
            where: {
                id: book.id
            }
        });
    }

    async delete(id: number) {
        const book: Book = await this.get(id);
        book.destroy();
    }

}
