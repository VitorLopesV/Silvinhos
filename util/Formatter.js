const Formatter = (text) => {
  // Remove tudo que não for número, utilizando regex
  let valor = text.replace(/[^0-9]/g, '');

  // Se o valor for menor que 3 dígitos, apenas retorna o número como está
  if (valor.length <= 2) {
    return `R$ ${valor}`;
  }

  // Separa a parte inteira e as casas decimais
  const inteiro = valor.slice(0, -2); // Tudo menos os dois últimos caracteres
  const decimal = valor.slice(-2);    // Os dois últimos caracteres

  // Formata a parte inteira com pontos para separar os milhares
  const inteiroFormatado = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Retorna o valor formatado com "R$"
  return `R$ ${inteiroFormatado},${decimal}`;
};

  export default Formatter;
