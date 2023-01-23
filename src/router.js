import { Router } from "express";
import ProdutosController from "./controllers/ProdutosController";
import QueryesController from "./controllers/QueryesController";
import QueryCategory from "./controllers/QueryCategory";
import Querycoritem from "./controllers/Querycoritem";
import PedidosController from "./controllers/PedidosController";
import CartoesController from "./controllers/CartoesController";
import EdicaohomeController from "./controllers/EdicaohomeController";
import Emailclientescontroller from "./controllers/Emailclientescontroller";
import Franquiascontroller from "./controllers/Franquiascontroller";
import SacController from "./controllers/SacController";
import Comentario from "./controllers/ComentarioController";
import Sandemailcontroller from "./controllers/Sandemailcontroller";

const routes = new Router();

//rotas principais

routes.post("/produtos", ProdutosController.store);
routes.get("/produtos", ProdutosController.index);
routes.get("/produtos/:_id", ProdutosController.index2);
routes.get("/produtos/produto", ProdutosController.index3);
routes.get("/preco", ProdutosController.index4);
routes.get("/marca", ProdutosController.index5);
routes.get("/modelo", ProdutosController.index6);
routes.get("/promocao", ProdutosController.index7);
routes.get("/promocao2", ProdutosController.index8);
routes.get("/desconto", ProdutosController.index9);
routes.delete("/produtos/:_id", ProdutosController.delete);
routes.put("/produtos/:_id", ProdutosController.update);

//rota queryes
routes.get("/produto", QueryesController.getproduto);

//mateus - category
routes.get("/categoria", QueryCategory.getCategoryProduct);
routes.get("/produtos/cor", Querycoritem.getmodelo);

routes.get("/cartoes", CartoesController.index);
routes.post("/cartoes", CartoesController.post);
routes.put("/cartoes/:_id", CartoesController.update);
routes.delete("/cartoes/:_id", CartoesController.delete);

routes.get("/cpf", CartoesController.index2);

//ROTAS PEDIDOS

routes.post("/pedidos", PedidosController.post);
routes.get("/pedidos", PedidosController.get);
routes.get("/pedidos/uid", PedidosController.get2);
routes.get("/pedidos/idpedido", PedidosController.get3);
routes.get("/pedidos/status", PedidosController.get4);
routes.get("/pedidos/nomecliente", PedidosController.get5);
routes.get("/pedidos/cpf", PedidosController.get6);
routes.get("/pedidos/valor", PedidosController.get7);
routes.delete("/pedidos/:_id", PedidosController.delete);
routes.put("/pedidos/:idpedido", PedidosController.update);

routes.get("/edicao", EdicaohomeController.get);
routes.post("/edicao", EdicaohomeController.post);
routes.put("/edicao/:_id", EdicaohomeController.update);

routes.get("/emailsclientes", Emailclientescontroller.get);
routes.post("/emailsclientes", Emailclientescontroller.post);
routes.delete("/emailsclientes/:_id", Emailclientescontroller.delete);
routes.put("/emailsclientes/:_id", Emailclientescontroller.update);

routes.post("/franquias", Franquiascontroller.post);
routes.get("/franquias", Franquiascontroller.get);

routes.post("/sac", SacController.post);
routes.get("/sac", SacController.get);

// COMENTARIOS

routes.post("/comentarios", Comentario.post);
routes.get("/comentarios", Comentario.index);
routes.put("/comentarios/:_id", Comentario.update);
routes.get("/comentarios/:_id", Comentario.index2);


routes.post('/send', Sandemailcontroller.post)

export default routes;
