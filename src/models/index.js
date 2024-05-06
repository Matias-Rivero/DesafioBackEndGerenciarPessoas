import db_dgp_pessoas from './db_dgp/db_dgp_pessoas.js' 
import db_dgp_endereco from './db_dgp/db_dgp_endereco.js'

db_dgp_pessoas.hasMany(db_dgp_endereco, { foreignKey: 'cpfFk' }) // 1 pessoa tem N enderecos
db_dgp_endereco.belongsTo(db_dgp_pessoas, { as: 'pessoas', foreignKey: 'cpfFk' }) // 1 endereco corresponde 1 pessoa

export {
    db_dgp_pessoas,
    db_dgp_endereco
}