module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  url: env('PUBLIC_URL', 'http://localhost:3001'),
  proxy: env.bool('PROXY', false)
});
