module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '403c56061cc31385787a4a689b7cce3b'),
    },
  },
  url: env('PUBLIC_URL', 'http://localhost:3001'),
  proxy: env.bool('PROXY', false)
});
