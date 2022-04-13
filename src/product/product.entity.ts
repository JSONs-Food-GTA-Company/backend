import { FLOAT } from 'sequelize';
import {
    Column,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { AddsItem } from 'src/addsItem/adds.item.entity';
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

    @HasMany(() => AddsItem)
    adds_item?: AddsItem[];
}
