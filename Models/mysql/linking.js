const sequelize = require('../../utils/dbmysql');

sequelize
    .sync({force:false})
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

require('./customer');
require('./sellers');