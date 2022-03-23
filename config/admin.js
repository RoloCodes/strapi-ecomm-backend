module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b3cb0c8ecd51e2dd73648a3dd77e683'),
  },
});
