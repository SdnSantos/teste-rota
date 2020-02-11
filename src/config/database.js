require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'docker',
  database: 'rotas',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
