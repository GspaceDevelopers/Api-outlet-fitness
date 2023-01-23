import { model, Schema } from 'mongoose'


const Emailsclientes = new Schema({
    nome: String,
    email: String,
    
})
export default new model('Emailsclientes',Emailsclientes)