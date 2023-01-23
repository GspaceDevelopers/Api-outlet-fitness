import { Schema, model } from 'mongoose'


const Edicaohome = new Schema({
    componentetexto1: String,
    componentelogos: {
        logo1: String,
        logo2: String,
        logo3: String,
        logo4: String,
        logo5: String,
        logo6: String,
        logo7: String,
    },
    backgoundhome: {
        background1: String,
        background2: String,
        background3: String,
        backgroundmobile1: String,
        backgroundmobile2: String,
        backgroundmobile3: String,
    },
    componentetexto2: String,
    banners: {
        banner1: String,
        banner2: String,
        banner3: String,
        banner4: String,
        banner5: String,
        banner6: String,
        banner7: String,
    }
})

export default model("Edicaohome", Edicaohome);