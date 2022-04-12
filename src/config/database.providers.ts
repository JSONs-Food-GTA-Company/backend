import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'database',
                port: 5432,
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
