module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3002),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '403c56061cc31385787a4a689b7cce3b'),
    },
  },
  url: env('PUBLIC_ADMIN_URL', '/admin'),
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
  forgotPassword: {
    from: 'no-reply@example.com',
    replyTo: 'no-reply@example.com',
  },
});
