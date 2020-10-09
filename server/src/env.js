import { config } from 'dotenv';
import { resolve } from 'path';

// .env file setting
config({ path: resolve(__dirname, '.env') });
