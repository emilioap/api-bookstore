import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { BookModel } from 'src/models/books.model';

@Table
export class Book extends Model<BookModel> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false
    })
    id: number;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.DECIMAL(10.2),
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
    })
    categoryId: number;
}