const { Sequelize } = require('sequelize')
const pg = require('pg')

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://neondb_owner:lZ9fPV2oumAQ@ep-twilight-sun-a8t237yx.eastus2.azure.neon.tech/neondb?sslmode=require', {
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
