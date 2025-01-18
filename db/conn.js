const { Sequelize } = require('sequelize')
const pg = require('pg')

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://neondb_owner:JzODHj1ER5Fk@ep-icy-river-a5lxt6xx.us-east-2.aws.neon.tech/neondb?sslmode=require', {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
})

try {
    sequelize.authenticate()
    console.log('Conectado ao PostgreSQL!')
} catch (error) {
    console.log(`Erro ao conectar: ${error}`)
}

module.exports = sequelize
