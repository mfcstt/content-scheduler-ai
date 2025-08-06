import path from 'node:path'
import { defineConfig } from 'prisma/config'
import { PrismaLibSQL } from '@prisma/adapter-libsql'

// import your .env file
import 'dotenv/config'
import { env } from 'node:process'

type ENV = {
    TURSO_DATABASE_URL: string
    TURSO_AUTH_TOKEN: string
}

export default defineConfig({
  experimental: {
    adapter: true,
  },
  schema: path.join('prisma', 'schema.prisma'),
  async adapter() {
    return new PrismaLibSQL({
      url: env.TURSO_DATABASE_URL!,
        authToken: env.TURSO_AUTH_TOKEN!,
    })
  }
})