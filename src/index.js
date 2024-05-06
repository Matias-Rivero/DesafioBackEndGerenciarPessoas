import db_dgp from './config/db_dgp.js'
import express from 'express'
import gerenciarPessoasRouter from './routes/gerenciarPessoasRoutes.js'

// Conexion bdd
try {
    await db_dgp.authenticate();
    db_dgp.sync() // Tambien crear la tabla en caso de que no este creada
} catch (error) {
    console.log(error)
}

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/gerenciarPessoas', gerenciarPessoasRouter)

app.listen(PORT, () => {
    console.log('Server pronto na port 3000')
});