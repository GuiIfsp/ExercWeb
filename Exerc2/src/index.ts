class Carro{
    private nome: string;
    private placa: string;
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

    idade (){
        let AnoATual: number = 2024
        return AnoATual - this.ano
    }
}

const CarroLegal = new Carro("Carro Legal", "COOL-DUDE", 2020)
console.log(CarroLegal)
console.log(CarroLegal.idade)