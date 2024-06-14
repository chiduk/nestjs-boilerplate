import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import * as process from 'process';

export enum NODE_ENV {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  TEST = 'test',
}

export const ENV_FILE = {
  production: '.env.production',
  test: '.env.test',
  development: '.env.development',
};

export const configValidator: ConfigModuleOptions = {
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid(NODE_ENV.PRODUCTION, NODE_ENV.DEVELOPMENT, NODE_ENV.TEST)
      .default(NODE_ENV.DEVELOPMENT),
    APP_PORT: Joi.number().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRATION_TIME: Joi.string().required(),
    LOGS_PATH: Joi.string().required(),
  }),
  isGlobal: true,
  envFilePath: ENV_FILE[process.env.NODE_ENV],
};
