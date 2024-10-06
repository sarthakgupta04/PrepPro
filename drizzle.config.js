/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:AuKJ3XSLWyf7@ep-morning-firefly-a5iq2wr5.us-east-2.aws.neon.tech/AI?sslmode=require',
    }
  };