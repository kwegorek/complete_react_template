const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html

const sequelize = new Sequelize('postgres://localhost:5432/yourdbname', {
  logging: console.log
}) // Example for postgres

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
});

(async () => {
  await sequelize.sync({
    alter: true
  });

  // Code here
})();

//alter: true; can be destructive operations. Therefore, they are not recommended for production-level software
