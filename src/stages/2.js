
export const stageTwo = {
  exec({ message }) {
    if (message === '1') {
      return '🔃 Clique no link para falar com o vendedor desejado: \n\n  Diana: - https://wa.me/5551984078045 \n  Daisson: - https://wa.me/5551999957331 \n';
    } else if (message === '2') {
      return '🔃 Clique no link para falar com o responsável financeiro: \n\n  Renogociação: - https://wa.me/5551 \n  Diversos: - https://wa.me/5551 \n';
    } else if (message === '3') {
      return '🔃 Clique no link para falar com o comprador: \n\n  Fornecedor Aluita: - https://wa.me/5551 \n  Novos fornecedores: - https://wa.me/5551 \n';
    } 

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};
