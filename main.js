class Persona{
    constructor(nombre, apellido, edad, sexo, peso, altura){
        this._nombre= nombre;
        this._apellido= apellido;
        this._edad= edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
    }

    // Getter para el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para el nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }


     // Getter para la edad
     get edad() {
         return this._edad;
     }
    
     // Setter para la edad
    set edad(nuevaEdad) {
         this._edad = nuevaEdad;
        }

        Saludar(){
        console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`);
    }
    
}


class Estudiante extends Persona{
    constructor(nombre, apellido, edad, carrera){
        super(nombre, apellido, edad);
        this.carrera = carrera;

    }

    Saludar(){
        console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años y estudio ${this.carrera}`);
    }
}


let persona1 = new Persona("Juan", "lazaro",  20, "Hombre", 75, 1.75);
console.log(persona1.nombre);
console.log(persona1._apellido);
console.log(persona1.edad);
console.log(persona1._sexo);
console.log(persona1._peso);
console.log(persona1._altura);
persona1.nombre = "Carlos"
persona1.Saludar();

const estudiante1 = new Estudiante("Carlos", "Lozano","48", "Ing-Sistemas");
console.log(estudiante1.nombre);
console.log(estudiante1._apellido);
estudiante1.Saludar();

