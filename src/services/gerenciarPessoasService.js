import { db_dgp_pessoas } from '../models/index.js'

const getAllPessoasService = async () => {
    const _pessoas = await db_dgp_pessoas.findAll()
    return _pessoas
}

const getOnePessoaService = async (pessoaCpf) => {
    const _pessoa = await db_dgp_pessoas.findOne({ where: {cpf: pessoaCpf}})
    return _pessoa	
}

const createNewPessoaService = async (newPessoa) => {
    const _pessoa = await db_dgp_pessoas.create(newPessoa)
    return _pessoa
}

const updateOnePessoaService = async (updatePessoa) => {
    const _pessoa = await db_dgp_pessoas.findOne({ where: {cpf: updatePessoa.cpf}})
    _pessoa.nome = updatePessoa.nome
    _pessoa.telefone = updatePessoa.telefone
    _pessoa.email = updatePessoa.email
    _pessoa.save()
    return _pessoa
}

const deleteOnePessoaService = async (pessoa) => {
    const _pessoa = await db_dgp_pessoas.findOne({ where: {cpf: pessoa.cpf}})
    _pessoa.destroy()
    return 'Pessoa eliminada com sucesso'
}

export {
    getAllPessoasService,
    getOnePessoaService,
    createNewPessoaService,
    updateOnePessoaService,
    deleteOnePessoaService
}