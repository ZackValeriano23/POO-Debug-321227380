class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    describir() {
        return `Vehículo de marca ${this.marca}`;
    }
}

class Automovil extends Vehiculo {
    constructor(marca, puertas) {
        this.puertas = puertas;
    }

    describir() {
        return `${super.describir()} con ${this.puertas} puertas`;
    }
}

const auto = new Automovil("Nissan", 4);
console.log(auto.describir());