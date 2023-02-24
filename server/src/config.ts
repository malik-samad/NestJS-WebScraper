import dotenv from "dotenv";
import { getDecryptedValues } from "ciphenv";

export const NEST_CONFIG_ENV = process.env.NEST_CONFIG_ENV || process.env.NODE_ENV;
dotenv.config({ path: `.env.${NEST_CONFIG_ENV}.local` });
dotenv.config({ path: `.env.${NEST_CONFIG_ENV}` });


const config = getDecryptedValues(process.env.ENCRYPTION_KEY, process.env);