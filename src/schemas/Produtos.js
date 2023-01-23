import { Schema, model } from "mongoose";

const Produtos = new Schema({
  produto: String,
  preco: String,
  modelo: String,
  marca: String,
  tipo: String,
  categoria: String,
  descricao: String,
  promocao: Boolean,
  promocao2: Boolean,
  qtdpromocao2: Number,
  desconto: String,

  cores: {
    corPrimary: {
      imgurl: String,
      imgurl2: String,
      cor1: String,

      tamanhos: {
        tamanhoOne: { tamanho1: String, quantidade: String },
        tamanhoTwo: { tamanho2: String, quantidade2: String },
        tamanhoThree: { tamanho3: String, quantidade3: String },
        tamanhoFour: { tamanho4: String, quantidade4: String },
      },
    },
    corSecondary: {
      imgurl3: String,
      imgurl4: String,
      cor2: String,
      tamanhos: {
        tamanhoOne: { tamanho5: String, quantidade5: String },
        tamanhoTwo: { tamanho6: String, quantidade6: String },
        tamanhoThree: { tamanho7: String, quantidade7: String },
        tamanhoFour: { tamanho8: String, quantidade8: String },
      },
    },
    corTertiary: {
      imgurl5: String,
      imgurl6: String,
      cor3: String,
      tamanhos: {
        tamanhoOne: { tamanho9: String, quantidade9: String },
        tamanhoTwo: { tamanho10: String, quantidade10: String },
        tamanhoThree: { tamanho11: String, quantidade11: String },
        tamanhoFour: { tamanho12: String, quantidade12: String },
      },
    },
    corQuaternary: {
      imgurl7: String,
      imgurl8: String,
      cor4: String,
      tamanhos: {
        tamanhoOne: { tamanho13: String, quantidade13: String },
        tamanhoTwo: { tamanho14: String, quantidade14: String },
        tamanhoThree: { tamanho15: String, quantidade15: String },
        tamanhoFour: { tamanho16: String, quantidade16: String },
      },
    },
  },
});

export default model("Produtos", Produtos);
