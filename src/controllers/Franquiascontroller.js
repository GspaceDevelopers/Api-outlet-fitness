import Franquias from "../schemas/Franquias";


class Franquiascontroller {
    async post(req, res) {
        const { nome, email, cpf, telefone } = req.body

        const Franquiaslist = await Franquias.create({
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
        })
        return res.json(Franquiaslist)
    }
    async get(req, res) {
        const Franquiaslist = await Franquias.find()
        return res.json(Franquiaslist)
    }

}
export default new Franquiascontroller();