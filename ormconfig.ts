import { User } from 'src/entities/user.entity';
// import { PostgresConnectionOptions } from ' @nestjs/typeorm/driver/postgres/Postgres ConnectionOptions";
const config =
{
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User],

    synchronize: true
};

export default config;