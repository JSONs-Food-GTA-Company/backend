import { FLOAT } from 'sequelize';
import {
    Column,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { Additional } from 'src/additional/additional.entity';
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

    @HasMany(() => Additional)
    adds_item?: Additional[];
}
