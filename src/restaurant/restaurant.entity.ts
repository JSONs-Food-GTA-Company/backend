import {
    Column,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/product.entity';

@Table
export class Restaurant extends Model {
    @Column({
        unique: true,
    })
    name: string;

    @Column
    address: string;

    @Column
    description: string;

    @Column
    logo_url: string;

    @Column
    owner: string;

    @HasMany(() => Product)
    products?: Product[];
}
