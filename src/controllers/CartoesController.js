import Cartoesclientes from '../schemas/Cartoescliente'

class Cartaocontroller {

    async index(req, res) {
        const cartoeslist = await Cartoesclientes.find()
        return res.json(cartoeslist)
    }
    async index2(req, res) {
        const { cpf } = req.query
        const cartoeslist = await Cartoesclientes.find({ cpf: cpf })
        return res.json(cartoeslist)
    }

    async post(req, res) {
        const { numero, datavalidade, bandeira, cpf } = req.body
        const cartoeslist = await Cartoesclientes.create({
            numero: numero,
            datavalidade: datavalidade,
            bandeira: bandeira,
            cpf: cpf
        })
        return res.json(cartoeslist)
    }
    async update(req, res) {
        const { _id } = req.params
        const { numero, datavalidade, bandeira, cpf } = req.body
        const cartoeslist = await Cartoesclientes.updateOne({ _id: _id }, {
            numero: numero,
            datavalidade: datavalidade,
            bandeira: bandeira,
            cpf: cpf
        })
        return res.json(cartoeslist)
    }

    async delete(req, res) {
        const { _id } = req.params
        const cartoeslist = await Cartoesclientes.deleteOne({ _id: _id })

        return res.json(cartoeslist)
    }
}
export default new Cartaocontroller();