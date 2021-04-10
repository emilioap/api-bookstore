import { Sequelize } from 'sequelize-typescript';
import { Book } from './entities/books.entity';
import { Category } from './entities/category.entity';
import { ServerSettings } from './serverSettings';

const settings = ServerSettings.getInstance().Settings;

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: settings.database.host,
                port: settings.database.port,
                username: settings.database.user,
                password: settings.database.password,
                database: settings.database.name
            });
            sequelize.addModels([Book, Category]);
            await sequelize.sync();
            return sequelize;
        },
    },
];