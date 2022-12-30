require('dotenv').config();

const config = {
  dbUser: process.env.PGUSER,
  dbName: process.env.PGDATABASE,
  dbPassword: process.env.PGPASSWORD,
  dbHost: process.env.HOST_DB,
  pgAdminEmail: process.env.PGADMIN_DEFAULT_EMAIL,
  pgAdminPassword: process.env.PGADMIN_DEFAULT_PASSWORD,
  dbPort: process.env.DB_PORT,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS
}


module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.HOST_DB,
    port: process.env.DB_PORT,
    dialect: 'postgres',

  }, config
}