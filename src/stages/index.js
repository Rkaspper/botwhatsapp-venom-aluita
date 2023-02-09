import { initialStage } from './0.js';
import { stageOne  } from './1.js';
import { stageTwo  } from './2.js';

const Client = require('pg').Client
const cliente = new Client({
  user: 'srv.giro',
  password: 'cVlzJ7QaBfAa2f1GS4ln',
  host: '88.0.1.3',
  port: 54325,
  database: 'datawarehouse'
})

async function lancaVisita(loja, promocao, numero){
  try{
    console.log("Iniciando a conexão.") 
    await cliente.connect()
    console.log("Conexão bem sucedida!") 
    await cliente.query('insert into visita_chatbot("data", "loja", "promocao", "numero") values ('+"'"+now()+"', '"+loja+"', '"+promocao+"', '"+numero+"'); ")
    console.log("Valor inserido na tabela") 
  }
  catch (ex){
    console.log("Ocorreu erro no lancaVisita. Errp: "+ ex)
  }

}

export { initialStage, stageOne, stageTwo  };
