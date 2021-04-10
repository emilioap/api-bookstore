import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from 'src/entities/books.entity';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService){
    }

    @Get('getall')
    async getAll(): Promise<Book[]> {
        return this.booksService.getAll();
    }

    @Get(':id')
    async get(@Param() params): Promise<Book> {
        return this.booksService.get(params.id);
    }

    @Post()
    async create(@Body() book: Book) {
        return this.booksService.create(book);
    }

    @Put()
    async update(@Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return this.booksService.delete(params.id);
    }
}