import { Sequelize } from 'sequelize-typescript';

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
                //restaurantes,
                //produtos,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
