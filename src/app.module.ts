import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { BooksController } from './controllers/books.controller';
import { CategoriesController } from './controllers/categories.controller';
import { booksProviders } from './repositories/books.repository.providers';
import { categoriesProviders } from './repositories/categories.repository.providers';
import { BooksService } from './services/books.service';
import { CategoriesService } from './services/categories.service';
import { databaseProviders } from './database.providers';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [BooksController, CategoriesController, HealthController],
  providers:
  [
    BooksService,
    CategoriesService,
    ...booksProviders,
    ...categoriesProviders,
    ...databaseProviders
  ]
})
export class AppModule {}
