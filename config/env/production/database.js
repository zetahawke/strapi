module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: env('DATABASE_CONNECTOR', 'bookshelf'),
      settings: {
        client: env('DATABASE_CLIENT', 'postgres'),
        host: env('DATABASE_HOST', '0.0.0.0'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: false,
        // ssl: {
        //   rejectUnauthorized: env.bool('DATABASE_SSL', false)
        // },
      },
      options: {},
    },
  },
});