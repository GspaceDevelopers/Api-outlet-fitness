import Edicaohome from "../schemas/Edicaohome";

class EdicaohomeController {
    async post(req, res) {
        const { componentetexto1, componentelogos: { logo1, logo2, logo3, logo4, logo5, logo6, logo7, }, backgoundhome: { background1, background2, background3, backgroundmobile1, backgroundmobile2, backgroundmobile3 }, componentetexto2, banners: { banner1, banner2, banner3, banner4, banner5, banner6, banner7 } } = req.body;
        const Edicaolist = await Edicaohome.create({
            componentetexto1: componentetexto1,
            componentelogos: {
                logo1: logo1,
                logo2: logo2,
                logo3: logo3,
                logo4: logo4,
                logo5: logo5,
                logo6: logo6,
                logo7: logo7,
            },
            backgoundhome: {
                background1: background1,
                background2: background2,
                background3: background3,
                backgroundmobile1: backgroundmobile1,
                backgroundmobile2: backgroundmobile2,
                backgroundmobile3: backgroundmobile3
            },
            componentetexto2: componentetexto2,
            banners: {
                banner1: banner1,
                banner2: banner2,
                banner3: banner3,
                banner4: banner4,
                banner5: banner5,
                banner6: banner6,
                banner7: banner7,
            }
        })
        return res.json(Edicaolist)
    }
    async update(req, res) {
        const { _id: _id } = req.params;
        const { componentetexto1, componentelogos: { logo1, logo2, logo3, logo4, logo5, logo6, logo7, }, backgoundhome: { background1, background2, background3, backgroundmobile1, backgroundmobile2, backgroundmobile3 }, componentetexto2, banners: { banner1, banner2, banner3, banner4, banner5, banner6, banner7 } } = req.body;
        const Edicaolist = await Edicaohome.updateOne({ _id: _id }, {
            componentetexto1: componentetexto1,
            componentelogos: {
                logo1: logo1,
                logo2: logo2,
                logo3: logo3,
                logo4: logo4,
                logo5: logo5,
                logo6: logo6,
                logo7: logo7,
            },
            backgoundhome: {
                background1: background1,
                background2: background2,
                background3: background3,
                backgroundmobile1: backgroundmobile1,
                backgroundmobile2: backgroundmobile2,
                backgroundmobile3: backgroundmobile3
            },
            componentetexto2: componentetexto2,
            banners: {
                banner1: banner1,
                banner2: banner2,
                banner3: banner3,
                banner4: banner4,
                banner5: banner5,
                banner6: banner6,
                banner7: banner7,
            }
        })
        return res.json(Edicaolist)
    }
    async get(req, res) {
        const Edicaolist = await Edicaohome.find()
        return res.json(Edicaolist)
    }
}
export default new EdicaohomeController();