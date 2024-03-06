//Função para retornar o maior numero de um vetor
function MaiorN(lista:number[]):number{
    let i:number = 0;
    let temp:number = -1;

    for(i = 0; i < lista.length; i++){
        if(lista[i] > temp){
            temp = lista[i]
        }
    }
    return temp;
}

//Função para saber se o numero recebido é par ou impar
function PaiImpar(n:number){
    if(n % 2 == 0)
        return "par"
    return "impar"
}

//Função que retorna a media de um array de numeros
function MediaArray(lista:number[]):number{
    let i:number = 0;
    let temp:number = 0;

    for(i = 0; i < lista.length; i++){
            temp = temp + lista[i]
    }
    temp = temp/lista.length

    return temp;
}

//Função que recebe uma string e retorna a mesma em CAIXA ALTA
function Upper(texto:string){
    return texto.toUpperCase()
}

//Função que recebe um N e fala se ele é primo ou nao
function IsPrimo(n:number){
    let i:number
    let temp:number = 0
    for(i = 1; i <= n/2; i++)
        if(n % i == 0)
            temp += 1
    if(temp > 2)
        return false
    return true
}

//Função que inverte um array
function Inverter(lista:number[]){
    return lista.reverse()
}

//Função que inverte uma string
function InverterString(texto:string){
    let array = texto.split('')
    return array
}

//Função que retorna a soma de todos os numeros pares em um array
function SomaPar(lista:number[]){
    let temp:number = 0
    let i:number

    for(i = 0; i < lista.length; i++)
        if(lista[i] % 2 == 0)
            temp += lista[i]
    return temp
}

//Função que retorna o fatorial de um N
function fatorial(n:number){
    let i:number
    let temp:number = 1

    for(i = n; i >= 1; i--)
        temp = temp*i

    return temp
}