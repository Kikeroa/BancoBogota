let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);