import { createRequire } from 'module';
const require = createRequire(import.meta.url);


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
    await cliente.query('insert into visita_chatbot("data", "loja", "promocao", "numero") values ('+"'now()', '"+loja+"', '"+promocao+"', '"+numero+"'); ")
    console.log("Valor inserido na tabela") 
  }
  catch (ex){
    console.log("Ocorreu erro no lancaVisita. Errp: "+ ex)
  }

}

export const stageTwo = {
  exec({ message }) {
    if (message === '1') {
      lancaVisita('poa', 'promocao', '1234')

      return '🔃 Clique no link para falar com o vendedor desejado: \n\n  Diana: - https://wa.me/5551984078045 \n  Daisson: - https://wa.me/5551999957331 \n';
    } else if (message === '2') {
      return '🔃 Clique no link para falar com o responsável financeiro: \n\n  Renogociação: - https://wa.me/5551 \n  Diversos: - https://wa.me/5551 \n';
    } else if (message === '3') {
      return '🔃 Clique no link para falar com o comprador: \n\n  Fornecedor Aluita: - https://wa.me/5551 \n  Novos fornecedores: - https://wa.me/5551 \n';
    } 

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};
