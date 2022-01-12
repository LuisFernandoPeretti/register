const Sequelize = require("sequelize")

const sequelize = new Sequelize('postgres', 'postgres', 'Info@1234',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}