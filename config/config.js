require("dotenv").config();

const{
  dbhost,
  dbusername,
  dbpassword,
  dbdialect,
  dbdatabase
} = process.env;

module.exports = 
{
  development: {
    username: dbusername,
    password: dbpassword,
    database: dbdatabase,
    host: dbhost,
    dialect: dbdialect,
    dialectOptions: {
    ssl: {
      require: true,
    }
  }
  },
  test: {
    username: dbusername,
    password: dbpassword,
    database: dbdatabase,
    host: dbhost,
    dialect: dbdialect,
    dialectOptions: {
    ssl: {
      require: true,
    }
  }
  },
  production: {
    username: dbusername,
    password: dbpassword,
    database: dbdatabase,
    host: dbhost,
    dialect: dbdialect,
    dialectOptions: {
    ssl: {
      require: true,
    }
  }
  }
}