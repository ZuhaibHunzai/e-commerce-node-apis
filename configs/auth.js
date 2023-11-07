// ! These two secrets should be in .env file and not in any other file
const getJwtConfig = () => ({
  expirationTime: process.env.JWT_EXPIRATION,
  secret: process.env.JWT_SECRET,
});

module.exports = {
  getJwtConfig,
};
