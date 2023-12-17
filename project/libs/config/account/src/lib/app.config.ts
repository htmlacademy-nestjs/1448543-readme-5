import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3000;
const ENVIROMENTS = ['production', 'development', 'stage'] as const;

type Enviroment = (typeof ENVIROMENTS)[number];

export interface ApplicationConfig {
  enviroment: string;
  port: number;
}
const validationSchema = Joi.object({
  enviroment: Joi.string()
    .valid([...ENVIROMENTS])
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

function validateConfig(config: ApplicationConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Application Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    enviroment: process.env.NODE_ENV as Enviroment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
