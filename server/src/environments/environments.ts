import 'dotenv/config';
import * as env from 'env-var';
import { Dialect } from 'sequelize';

export const envs = {
    PORT: env.get('PORT').default('3000').required().asPortNumber(),
    DB_HOST: env.get('DB_HOST').required().asString(),
    DB_PORT: env.get('DB_PORT').required().asPortNumber(),
    DB_USER: env.get('DB_USER').required().asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
    DB_NAME: env.get('DB_NAME').required().asString(),
    DB_DIALECT: process.env.DB_DIALECT as Dialect || 'mysql',
    JWT_SECRET_KEY: env.get('JWT_SECRET_KEY').required().asString(),
}