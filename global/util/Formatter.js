const Formatter = (text) => {
    // Remove caracteres que não são números ou vírgulas
    const valor = text.replace(/[^0-9,]/g, '');

    // Se o texto estiver vazio, retorna vazio
    if (valor.length === 0) return '';

    // Separa a parte inteira da decimal
    let [inteiro, decimal] = valor.split(',');

    // Adiciona formatação com R$ e casas decimais
    inteiro = parseInt(inteiro, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Formata a parte inteira
    if (decimal) {
      decimal = decimal.length > 2 ? decimal.slice(0, 2) : decimal; // Limita a duas casas decimais
    } else {
      decimal = '';
    }

    return `R$ ${inteiro}${decimal ? ',' + decimal : ''}`;
  };

  export default Formatter;
