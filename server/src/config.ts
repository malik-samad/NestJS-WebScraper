import { config as dotenvConfig } from "dotenv"
import { decryptValues } from "ciphenv";

export const NEST_CONFIG_ENV = process.env.NEST_CONFIG_ENV || process.env.NODE_ENV;
dotenvConfig({ path: `.env.${NEST_CONFIG_ENV}.local` });
dotenvConfig({ path: `.env.${NEST_CONFIG_ENV}` });

const config = decryptValues(process.env.ENCRYPTION_KEY, process.env);

export default process.env.ENCRYPTION_KEY