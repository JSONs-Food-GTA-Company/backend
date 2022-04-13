import { FLOAT } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/product.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Table
export class AddsItem extends Model {
    @Column
    item: string;

    @Column
    quantity: number;

    @Column({
        type: FLOAT,
    })
    price;

    @ForeignKey(() => Product)
    product_id: Product;
}
