import { FLOAT } from 'sequelize';
import {
    Column,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Table
export class Product extends Model {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    image_url: string;

    @Column({
        type: FLOAT,
    })
    price;

    @ForeignKey(() => Restaurant)
    restaurant_id: Restaurant;
}
