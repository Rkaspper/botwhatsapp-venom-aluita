import { storage } from '../storage.js';
import { setores } from '../setores.js';

export const stageOne = {
  exec({ message, from }) {
    if (message === '1') {

      let msg = ' Você escolheu a loja de Porto Alegre\n-----------------------------------\n Escolha abaixo o setor de atendimento desejado\n-----------------------------------\n';
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
    } else if (message === '2') {
      return from;
    } else if (message === '3') {
      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    } else if (message === '4') {
      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    } else if (message === '5') {
      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    } else if (message === '6') {
      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    }

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};
