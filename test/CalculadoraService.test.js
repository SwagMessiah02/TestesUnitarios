const { expect } = require("chai");
const CalculadorService = require("../CalculadoraService");
const DivisionException = require("../utils/exceptions/DivisionException");

describe("CalculadorService", () => {
  let calculador;

  beforeEach(() => {
    calculador = new CalculadorService();
  });

  // Testes para somar(a, b)
  describe("somar(a, b)", () => {
    it("deve retornar a soma de dois números positivos", () => {
      expect(calculador.somar(2, 3)).to.equal(5);
    });

    it("deve retornar a soma de um número positivo e um negativo", () => {
      expect(calculador.somar(5, -3)).to.equal(2);
    });

    it("deve retornar zero ao somar dois zeros", () => {
      expect(calculador.somar(0, 0)).to.equal(0);
    });
  });

  // Testes para subtrair(a, b)
  describe("subtrair(a, b)", () => {
    it("deve retornar a subtração correta entre dois números", () => {
      expect(calculador.subtrair(10, 4)).to.equal(6);
    });

    it("deve permitir resultado negativo", () => {
      expect(calculador.subtrair(3, 5)).to.equal(-2);
    });

    it("deve retornar zero quando os valores forem iguais", () => {
      expect(calculador.subtrair(7, 7)).to.equal(0);
    });
  });

  // Testes para multiplicar(a, b)
  describe("multiplicar(a, b)", () => {
    it("deve retornar a multiplicação de dois números positivos", () => {
      expect(calculador.multiplicar(4, 5)).to.equal(20);
    });

    it("deve retornar zero quando um dos valores for zero", () => {
      expect(calculador.multiplicar(10, 0)).to.equal(0);
    });

    it("deve funcionar corretamente com números negativos", () => {
      expect(calculador.multiplicar(-2, 3)).to.equal(-6);
    });
  });

  // Testes para dividir(a, b)
  describe("dividir(a, b)", () => {
    it("deve retornar o quociente correto da divisão", () => {
      expect(calculador.dividir(10, 2)).to.equal(5);
    });

    it("deve lançar exceção ao tentar dividir por zero", () => {
      expect(() => calculador.dividir(10, 0)).to.throw(DivisionException);
    });

    it("deve funcionar com números decimais", () => {
      expect(calculador.dividir(5, 2)).to.equal(2.5);
    });
  });

  // Testes para isPar(numero)
  describe("isPar(numero)", () => {
    it("deve retornar verdadeiro para números pares", () => {
      expect(calculador.isPar(4)).to.be.true;
    });

    it("deve retornar falso para números ímpares", () => {
      expect(calculador.isPar(7)).to.be.false;
    });

    it("deve funcionar corretamente com zero", () => {
      expect(calculador.isPar(0)).to.be.true;
    });
  });

  // Testes para validarNumeroPositivo(numero)
  describe("validarNumeroPositivo(numero)", () => {
    it("deve retornar verdadeiro para números positivos", () => {
      expect(calculador.validarNumeroPositivo(5)).to.be.true;
    });

    it("deve retornar falso para números negativos", () => {
      expect(calculador.validarNumeroPositivo(-3)).to.be.false;
    });

    it("deve retornar falso para zero", () => {
      expect(calculador.validarNumeroPositivo(0)).to.be.false;
    });
  });
});
