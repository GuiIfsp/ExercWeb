"use strict";
//Exerc 1
class carro {
    constructor(nome, placa, ano) {
        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
    }
    get getNome() {
        return this.nome;
    }
    get getPlaca() {
        return this.placa;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setPlaca(placa) {
        this.placa = placa;
    }
    idade() {
        let AnoATual = 2024;
        return AnoATual - this.ano;
    }
}
const CarroLegal = new carro("Carro Legal", "COOL-DUDE", 2020);
//Exerc 2
class calculadora {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    set setN1(n1) {
        this.n1 = n1;
    }
    set setN2(n2) {
        this.n2 = n2;
    }
    soma() {
        return this.n1 + this.n2;
    }
    sub() {
        return this.n1 - this.n2;
    }
    mult() {
        return this.n1 * this.n2;
    }
    div() {
        if (this.n2 == 0) {
            return "Conta invalida, divisao por 0!!!";
        }
        return this.n1 / this.n2;
    }
    porc() {
        return (this.n1 / this.n2) * 100;
    }
}
//Exerc 3
class produto {
    constructor(nome, preco, quant) {
        this.nome = nome;
        this.preco = preco;
        this.quant = quant;
    }
    calcularValorTotalEmEstoque() {
        return this.preco * this.quant;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    get getPreco() {
        return this.preco;
    }
    set setQuant(quant) {
        this.quant = quant;
    }
    get getQuant() {
        return this.quant;
    }
    reporEstoque(quant) {
        this.quant = this.quant + quant;
    }
    venderEstoque(quant) {
        if (this.quant < quant) {
            console.log("Estoque insuficiente");
        }
        else {
            this.quant = this.quant - quant;
        }
    }
}
