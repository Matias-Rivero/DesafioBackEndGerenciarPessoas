import { db_dgp_pessoas, db_dgp_endereco } from '../models/index.js'

const getAllEnderecosDePessoaService = async (pessoa) => {
    const _enderecos = await db_dgp_endereco.findAll({
        where: {
            cpfFk: pessoa.cpf
        }
    })
    return _enderecos
}

const createNewEnderecoService = async (newEndereco) => {
    const _endereco = await db_dgp_endereco.create(newEndereco)
    return _endereco
}

const updateOneEnderecoService = async (updateEndereco) => {
    const _endereco = await db_dgp_endereco.findOne({ where: {id_endereco: updateEndereco.id_endereco}})
    _endereco.logradouro = updateEndereco.logradouro
    _endereco.numero = updateEndereco.numero
    _endereco.bairro = updateEndereco.bairro
    _endereco.cidade = updateEndereco.cidade
    _endereco.estado = updateEndereco.estado
    _endereco.save()
    return _endereco
}

const deleteOneEnderecoService = async (id_endereco) => {
    const _endereco = await db_dgp_endereco.findOne({ id_endereco })
    _endereco.destroy()
    return 'Endereco eliminada com sucesso'
}

export {
    getAllEnderecosDePessoaService,
    createNewEnderecoService,
    updateOneEnderecoService,
    deleteOneEnderecoService
}