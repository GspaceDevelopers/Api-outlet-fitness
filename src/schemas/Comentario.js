import { Schema, model } from "mongoose";

const Comentario = new Schema({
  user: String,
  idproduto: String,
  comentario: String,
  printcomentario: Boolean,
  star: String,
  data: Date,
});
export default model("Comentario", Comentario);
