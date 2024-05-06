import { DataTypes } from 'sequelize'
import db_dgp from '../../config/db_dgp.js'

const db_dgp_endereco  = db_dgp.define('endereco',{
    id_endereco: {
        type: DataTypes.STRING,
        primaryKey: true         
    },
    cpfFk: {
        type: DataTypes.STRING,
        allowNull: false   
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default db_dgp_endereco
