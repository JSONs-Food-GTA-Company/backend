import {
    Column,
    Model,
    Table,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    image_url: string;

    @Column
    price: number;
}
