import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

   constructor(cliente, agencia){
       super(0, cliente, agencia) //chama o construtor da classe pai
       ContaCorrente.numeroDeContas += 1;
    }

    //sobrescrevendo o comportamento de sacar da classe mãe(Conta)
    sacar(valor){
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }

}
