import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CategoryModel } from 'src/models/category.model';

@Table
export class Category extends Model<CategoryModel> {
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false
    })
    id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    @Column
    name: string;
}