//Exerc 1
class carro{
    private nome: string
    private placa: string
    private ano: number

    constructor(nome: string, placa:string, ano:number){
        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
    }

    get getNome():string{
        return this.nome
    }

    get getPlaca():string{
        return this.placa
    }

    set setNome(nome:string){
        this.nome = nome
    }

    set setPlaca(placa:string){
        this.placa = placa
    }

    idade(){
        let AnoATual: number = 2024
        return AnoATual - this.ano
    }
}

const CarroLegal = new carro("Carro Legal", "COOL-DUDE", 2020)

//Exerc 2
class calculadora{
    private n1: number
    private n2: number

    constructor(n1:number, n2:number){
        this.n1 = n1
        this.n2 = n2
    }

    set setN1(n1:number){
        this.n1 = n1
    }

    set setN2(n2:number){
        this.n2 = n2
    }

    soma(){
        return this.n1 + this.n2
    }

    sub(){
        return this.n1 - this.n2
    }

    mult(){
        return this.n1 * this.n2
    }

    div(){
        if(this.n2 == 0){
            return "Conta invalida, divisao por 0!!!"
        }
        return this.n1 / this.n2
    }

    porc(){
        return (this.n1 / this.n2) * 100
    }
}

//Exerc 3
class produto{
    nome:string
    preco: number
    quant: number

    constructor(nome:string, preco: number, quant: number){
        this.nome = nome
        this.preco = preco
        this.quant = quant
    }

    calcularValorTotalEmEstoque(){
        return this.preco * this.quant
    }

    set setNome(nome:string){
        this.nome = nome
    }

    get getNome(){
        return this.nome
    }

    set setPreco(preco:number){
        this.preco = preco
    }

    get getPreco(){
        return this.preco
    }

    set setQuant(quant:number){
        this.quant = quant
    }

    get getQuant(){
        return this.quant
    }

    reporEstoque(quant:number){
        this.quant = this.quant + quant
    }

    venderEstoque(quant:number){
        if(this.quant < quant){
            console.log("Estoque insuficiente")
        }
        else{
            this.quant = this.quant - quant
        }
    }
}