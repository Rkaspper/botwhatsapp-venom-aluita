import { createRequire } from 'module';
import { retornaPromocao  } from './0.js';
import { retornaLoja } from './1.js';
import { retornaComercial, retornaFinanceiro, retornaCompras } from '../contatos.js';
const require = createRequire(import.meta.url);


const Client = require('pg').Client

const cliente = new Client({
  user: 'srv.giro',
  password: 'cVlzJ7QaBfAa2f1GS4ln',
  host: '88.0.1.3',
  port: 54325,
  database: 'datawarehouse'
})

async function lancaVisita(loja, promocao, numero, setor){
  try{
    console.log("Iniciando a conexão.") 
    await cliente.connect()
    console.log("Conexão bem sucedida!") 
    await cliente.query('insert into visita_chatbot("data", "loja", "promocao", "numero", setor) values ('+"'now()', '"+loja+"', '"+promocao+"', '"+numero+"', '"+setor+"'); ")
    console.log("Valor inserido na tabela") 
  }
  catch (ex){
    console.log("Ocorreu erro no lancaVisita. Errp: "+ ex)
  }

}

let promocao = retornaPromocao();
let loja = retornaLoja();

export const stageTwo = {
  exec({ message, from }) {
    if (message === '1') {  
      lancaVisita(loja, promocao, from, 'Comercial')
      let msg = retornaComercial()
      return msg;
    } else if (message === '2') {
      lancaVisita(loja, promocao, from, 'Financeiro')
      let msg = retornaFinanceiro()
      return msg;
    } else if (message === '3') {
      lancaVisita(loja, promocao, from, 'Compras')
      let msg = retornaCompras()
      return msg;
    } 

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};
