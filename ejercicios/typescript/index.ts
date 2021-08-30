// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
/*enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
//any se puede tener cualquier tipo de variable
let comodin: any = 'Joker';
//el type puede ser string, object, etc

comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };
//
*/

// Funciones
// : 'para añadir el tipo que regresa siendo explicito
/*function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);
// se pone :(numer => number) porque se anota el valor que regresa la funcion,toma un numero y regresa otro numero (=>)
function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//si se pone lastname? con simbolo interrogación es opcional el parametro
//se pone smith en caso que no reciba ningun valor, lo manda por default
function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}


const richard = fullName('Agente');
console.log(richard);
*/
// Interfaces
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}
//interfas  se declaran las propiedades con su tipo
//se vuelve un tipo
//definen las formas exactas que debe de tener un objeto, si es opcional una propiedad se debe de marcar como opcional
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}
//rect es del tipo rectangulo
let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  //si existe el color
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
