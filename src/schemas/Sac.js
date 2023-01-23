import { model, Schema } from 'mongoose'

const Sac = new Schema({
    nome: String,
    email: String,
    mensagem: String
})

export default new model('Sac', Sac)