"use strict";
(() => {
    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(name, edad, sexo, estadoCivil) {
            this.name = name;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`My name is ${this.name}, I'm ${this.edad} and currently I'm ${this.estadoCivil}`);
        }
    }
});
