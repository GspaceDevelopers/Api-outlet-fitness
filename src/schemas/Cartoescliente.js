import { Schema, model } from "mongoose";

const Cartoes = new Schema({
  numero: String,
  datavalidade: String,
  bandeira: String,
  idproduto: String,
  cpf: Number,
});
export default model("Cartoes", Cartoes);
