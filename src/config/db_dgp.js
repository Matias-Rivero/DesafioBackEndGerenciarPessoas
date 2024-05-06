import Sequelize from 'sequelize'

const db_dgp = new Sequelize('db_dgp','root','', {
    host: 'localhost',
    port: 3306,
    timezone: "-03:00",
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db_dgp;
