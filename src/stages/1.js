import { storage } from '../storage.js';
import { setores } from '../setores.js';

export const stageOne = {
  exec({ message, from }) {

    if (message === '1') {
      const msg = ' Você escolheu a loja de Porto Alegre\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else if (message === '2') { 
      const msg = ' Você escolheu a loja de Pelotas\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else if (message === '3') {
      const msg = ' Você escolheu a loja de Passo Fundo\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else if (message === '4') {
      const msg = ' Você escolheu a loja de Santa Maria\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else if (message === '5') {
      const msg = ' Você escolheu a loja de Novo Hamburgo\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else if (message === '6') {
      const msg = ' Você escolheu a loja de Caxias do Sul\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
    } else {
      return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
    }
    
    Object.keys(setores).map((value) => {
      const element = setores[value];
      if (value === '1') {
        msg += `1️⃣ - ${element.description}\n`;
      } else if (value === '2') {
        msg += `2️⃣ - ${element.description}\n`;
      } else if (value === '3') {
        msg += `3️⃣ - ${element.description}\n`;
      } 
    }); 
    
    storage[from].stage = 2;

    return msg;
 
  },
};

export function retornaLoja({ message }) {
 if (message === '1') {
  const loja = 'Porto Alegre';
 } else if (message === '2') {
  const loja = 'Pelotas';
 } else if (message === '3') {
  const loja = 'Passo Fundo';
 } else if (message === '4') {
  const loja = 'Santa Maria';
 } else if (message === '5') {
  const loja = 'Novo Hamburgo';
 } else if (message === '6') {
  const loja = 'Caxias do Sul';
 }
  return loja;
}
