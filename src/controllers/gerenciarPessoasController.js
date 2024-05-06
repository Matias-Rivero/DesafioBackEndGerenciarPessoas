import { getAllPessoasService, getOnePessoaService, createNewPessoaService, updateOnePessoaService, deleteOnePessoaService } from '../services/gerenciarPessoasService.js'

const getAllPessoas = async (req, res) => { 
    try {
        const allPessoas = await getAllPessoasService()
        res.send({ status: "OK", data: allPessoas });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

const getOnePessoa = async (req, res) => {

    const { pessoaCpf } = req.params;
  
    try {
        const pessoa = await getOnePessoaService(pessoaCpf);
        if(pessoa!=null){
        res.send({ status: "OK", data: pessoa });
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

const createNewPessoa = async (req, res) => {
    const { body } = req;

    if (
        !body.nome ||
        !body.cpf ||
        !body.telefone ||
        !body.email
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "Uma das seguintes chaves está faltando ou está vazia no corpo da solicitação: 'nome', 'cpf', 'telefone', 'email'",
        },
      });
      return
    }

    const pessoa = await getOnePessoaService(body.cpf);
  
    if (pessoa!=null) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
          `O cpf informado ${body.cpf} já está cadastrado`,
        },
      });
      return
    }

    const newPessoa = {
        nome: body.nome,
        cpf: body.cpf,
        telefone: body.telefone,
        email: body.email
    };
  
    try {
      const createdPessoa = await createNewPessoaService(newPessoa)
      res.status(201).send({ status: "OK", data: createdPessoa })
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } })
    }
};

const updateOnePessoa = async (req, res) => {
    
    const { body } = req;

    const updatePessoa = {
        nome: body.nome,
        cpf: body.cpf,
        telefone: body.telefone,
        email: body.email
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
        const updatedPessoa = await updateOnePessoaService(updatePessoa)
        res.send({ status: "OK", data: updatedPessoa });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }    
  
}

const deleteOnePessoa = async (req, res) => {

    const { pessoaCpf } = req.params;
  
    try {
        const pessoa = await getOnePessoaService(pessoaCpf);
       
        if(pessoa!=null){

        let msj = await deleteOnePessoaService(pessoa)
        res.send({ status: "OK", data: msj });
        
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

export {
    getAllPessoas,
    getOnePessoa,
    createNewPessoa,
    updateOnePessoa,
    deleteOnePessoa
}