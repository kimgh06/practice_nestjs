export default () => ({
  app: {
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
});