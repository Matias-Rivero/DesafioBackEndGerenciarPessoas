import { DataTypes } from 'sequelize'
import db_dgp from '../../config/db_dgp.js'

const db_dgp_pessoas  = db_dgp.define('pessoas',{
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default db_dgp_pessoas
