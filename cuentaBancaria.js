class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria(500);
console.log(`Saldo disponible: ${cuenta.consultarSaldo()}`);

