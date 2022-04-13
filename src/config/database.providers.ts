import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/product/product.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5434,
                username: 'root',
                password: 'password',
                database: 'globotech',
            });
            sequelize.addModels([
                Restaurant,
                Product,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
