class DivisionException extends Error {
  constructor() {
    super("Divisão por zero não é permitida");
    this.name = "DivisaoPorZeroError";
  }
}

module.exports = DivisionException;
