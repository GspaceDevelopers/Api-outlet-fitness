import { model, Schema } from 'mongoose'

const Franquias = new Schema({
    nome: String,
    email: String,
    cpf: String,
    telefone: String,
})

export default model('Franquias', Franquias)