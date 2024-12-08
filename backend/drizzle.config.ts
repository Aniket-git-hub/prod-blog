import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/models/index.ts',
    out: './src/migrations',
    dialect: 'postgresql',
    strict: true,
    verbose: true,
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
} satisfies Config;
