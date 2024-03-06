"use strict";
class Carro {
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
const CarroLegal = new Carro("Carro Legal", "COOL-DUDE", 2020);
console.log(CarroLegal);
console.log(CarroLegal.idade());
