class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //underline para a funçao get e set ter o nome saldo, mas a funçao nao ter o nome saldo (boas praticas)
    }
    
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor> this._saldo){
            throw 'Operação negada - Saldo insuficiente';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{ //extends determina a classe pai
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero); //metodo super para alterar na classe pai
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Poupanca';
    }


}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta universitária';
    }

    sacar(valor){
        if (valor>500){
            throw 'Operaçao invalida - Limite de saque excedido';
        }// limita o valor do saque a 500 reais

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}