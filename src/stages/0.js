import { storage } from '../storage.js';

export const initialStage = {
  exec({ from, message }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou o assistente virtual da Aluita Alumínio. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\nDIGITE A OPÇÃO PARA ESCOLHER A LOJA\n-----------------------------------\n1 - PORTO ALEGRE \n2 - PELOTAS\n3 - PASSO FUNDO\n4 - SANTA  MARIA\n5 - NOVO HAMBURGO\n6 - CAXIAS';
  },
};