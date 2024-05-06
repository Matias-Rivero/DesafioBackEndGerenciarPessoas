import express from 'express'
import { getAllPessoas, getOnePessoa, createNewPessoa, updateOnePessoa, deleteOnePessoa } from '../controllers/gerenciarPessoasController.js'
import { getAllEnderecosDePessoa, createNewEndereco, updateOneEndereco, deleteOneEndereco } from '../controllers/gerenciarEnderecosController.js'

const router = express.Router()

router
    .get('/', getAllPessoas)
    .get('/:pessoaCpf', getOnePessoa)
    .post('/', createNewPessoa)
    .patch('/', updateOnePessoa)
    .delete('/:pessoaCpf', deleteOnePessoa)   
    .get('/enderecos/:pessoaCpf', getAllEnderecosDePessoa)
    .post('/enderecos', createNewEndereco)
    .patch('/enderecos', updateOneEndereco)
    .delete('/enderecos/:id', deleteOneEndereco)   

 export default router;