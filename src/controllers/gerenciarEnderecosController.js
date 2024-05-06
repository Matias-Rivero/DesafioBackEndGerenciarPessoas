import { getAllPessoasService, getOnePessoaService, createNewPessoaService, updateOnePessoaService, deleteOnePessoaService } from '../services/gerenciarPessoasService.js'
import { getAllEnderecosDePessoaService, createNewEnderecoService, updateOneEnderecoService, deleteOneEnderecoService } from '../services/gerenciarEnderecosService.js'

const getAllEnderecosDePessoa = async (req, res) => { 

    const { pessoaCpf } = req.params;
  
    try {
        const pessoa = await getOnePessoaService(pessoaCpf);
        if(pessoa!=null){

        let enderecos = await getAllEnderecosDePessoaService(pessoa)    
        res.send({ status: "OK", data: enderecos });

        }else{
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                "Por favor verifique o cpf informado",
            },
        });    
        }
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }

}

const createNewEndereco = async (req, res) => {
    const { body } = req;

    if (
        !body.cpf ||
        !body.logradouro ||
        !body.numero ||
        !body.bairro ||
        !body.cidade ||
        !body.estado
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "Uma das seguintes chaves está faltando ou está vazia no corpo da solicitação: 'cpf','logradouro', 'numero', 'bairro', 'cidade', 'estado'",
        },
      });
      return
    }

    const pessoa = await getOnePessoaService(body.cpf);
  
    if (pessoa==null) {
        res.status(400).send({
          status: "FAILED",
          data: {
            error:
            `O cpf informado não está cadastrado`,
          },
        });
        return
    }

    const newEndereco = {
        id_endereco: body.id_endereco != '' ? body.id_endereco : (Math.random().toString(32).substring(2) + Date.now().toString(32)),
        cpfFk: body.cpf,
        logradouro: body.logradouro,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        estado: body.estado
    }
  
    try {
      const createdEndereco = await createNewEnderecoService(newEndereco)
      res.status(201).send({ status: "OK", data: createdEndereco })
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } })
    }
};

const updateOneEndereco = async (req, res) => {
    
    const { body } = req;

    const updateEndereco = {
        id_endereco: body.id_endereco,
        cpf: body.cpf,
        logradouro: body.logradouro,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        estado: body.estado
    };

    const pessoa = await getOnePessoaService(body.cpf);
  
    if (pessoa==null) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
          `O cpf informado não está cadastrado`,
        },
      });
      return
    }

    try {
        const updatedEndereco = await updateOneEnderecoService(updateEndereco)
        res.send({ status: "OK", data: updatedEndereco });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }    
  
}

const deleteOneEndereco = async (req, res) => { 

    const { id } = req.params;
  
    try {

        let msj = await deleteOneEnderecoService(id)
        res.send({ status: "OK", data: msj });
        
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }

}

export {
    getAllEnderecosDePessoa,
    createNewEndereco,
    updateOneEndereco,
    deleteOneEndereco
}