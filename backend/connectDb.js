const Sequelize = require('sequelize')
const dbName = process.env.NODE_ENV === 'test' ? 'test' : 'todoApp'
const sequelize = new Sequelize('postgres://postgres@postgres:5432/'+ dbName)

module.exports = sequelize
