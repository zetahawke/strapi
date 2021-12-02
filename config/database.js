// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: env('DATABASE_CONNECTOR', 'bookshelf'),
//       settings: {
//         client: env('DATABASE_CLIENT', 'sqlite'),
//         host: env('DATABASE_HOST', '0.0.0.0'),
//         port: env.int('DATABASE_PORT', null),
//         database: env('DATABASE_NAME', 'strapi_dev'),
//         username: env('DATABASE_USERNAME', null),
//         password: env('DATABASE_PASSWORD', null),
//       },
//       options: {
//         useNullAsDefault: true,
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: env('DATABASE_CLIENT', 'postgres'),
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi_dev'),
//       user: env('DATABASE_USERNAME', ''),
//       password: env('DATABASE_PASSWORD', ''),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });

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