import { config } from 'dotenv';

if (process.env.NODE_ENV == 'development') {
  config({ path: "./.env" });

} else {
  config({ path: "./.env.test" });
}