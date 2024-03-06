"use strict";
//Função para retornar o maior numero de um vetor
function MaiorN(lista) {
    let i = 0;
    let temp = -1;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > temp) {
            temp = lista[i];
        }
    }
    return temp;
}
//Função para saber se o numero recebido é par ou impar
function PaiImpar(n) {
    if (n % 2 == 0)
        return "par";
    return "impar";
}
//Função que retorna a media de um array de numeros
function MediaArray(lista) {
    let i = 0;
    let temp = 0;
    for (i = 0; i < lista.length; i++) {
        temp = temp + lista[i];
    }
    temp = temp / lista.length;
    return temp;
}
//Função que recebe uma string e retorna a mesma em CAIXA ALTA
function Upper(texto) {
    return texto.toUpperCase();
}
//Função que recebe um N e fala se ele é primo ou nao
function IsPrimo(n) {
    let i;
    let temp = 0;
    for (i = 1; i <= n / 2; i++)
        if (n % i == 0)
            temp += 1;
    if (temp > 2)
        return false;
    return true;
}
//Função que inverte um array
function Inverter(lista) {
    return lista.reverse();
}
//Função que inverte uma string
function InverterString(texto) {
    let array = texto.split('');
    return array;
}
//Função que retorna a soma de todos os numeros pares em um array
function SomaPar(lista) {
    let temp = 0;
    let i;
    for (i = 0; i < lista.length; i++)
        if (lista[i] % 2 == 0)
            temp += lista[i];
    return temp;
}
//Função que retorna o fatorial de um N
function fatorial(n) {
    let i;
    let temp = 1;
    for (i = n; i >= 1; i--)
        temp = temp * i;
    return temp;
}