const DivisionException = require("./utils/exceptions/DivisionException");

class CalculadorService {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new DivisionException("Divisão por zero não é permitida");
    }
    return a / b;
  }

  isPar(numero) {
    return numero % 2 === 0;
  }

  validarNumeroPositivo(numero) {
    if (numero === 0) {
      return false; 
    }

    return numero > 0;
  }
}

module.exports = CalculadorService;
