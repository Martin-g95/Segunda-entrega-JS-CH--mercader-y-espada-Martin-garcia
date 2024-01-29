//Objeto constructor
class Objetos {
    constructor (nombre, valor){
        this.nombre = nombre;
        this.valor = valor;
    }
}
//Los objetos que estan en la tienda.
const Madera = new Objetos("Madera", 10);
const Acero = new Objetos("Acero", 20);
const Cuero = new Objetos("Cuero", 5);
const Gema = new Objetos("Gema", 10);
const Pomo = new Objetos("Pomo", 7);

//La lista del vendedor, que es su tienda, y nuestra mochila, que es una lista donde iran los objetos que compremos.

const vendedor = [Madera, Acero, Cuero, Gema, Pomo];
const mochila = []

//Una variable donde guarde la longitud del array.
let cantidadObjetosVendedor = vendedor.length; 
//Uso el metodo join para mostrar el valor de strings del array asi se pueda leer en el alert o el prompt.
//
alert("Luego de tu escape y de vagar por el bosque, te encuentras en el medio del camino un mercader y un herrero, es algo extraño que esten tan alejados de la ciudad,pero aprovechas para preguntarles si podrian fabricarte un arma, necesitas una espada luego de todo lo que te sucedio.")
alert('"Que tal extraño! supongo que quieres que te fabriquen una espada, yo te guiare, pero primero tienes que comprar los componentes para ellos."')
let nombreCompra = prompt(`"Estos son los objetos que posee el mercader, ten en cuenta que tienes que escribir exactamente por como se llaman a continuacion:" ${(vendedor.map(Objetos => Objetos.nombre).join(', '))}`);
//Funcion en donde se realiza el el traspaso, al escribir el nombre exacto pasa de vendedor a mochila
const comprarObjeto = (nombre) => { //El nombre es el parametro de la funcion que es en donde se deposita el prompt.
    let indice = vendedor.findIndex(Objetos => Objetos.nombre === nombre); //FindIndex me va a comparar si lo que esta escrito en el prompt es igual a un nombre del objeto, hay que tener en cuenta que tambien devolvera el indice de lo que se escribe, sin importar el orden en donde este en la lista de los objetos.
    //Como findIndex devuelve un valor booleano de 1 si es verdadero y -1 si es falso, se crea una condicion en donde si lo que se escribe el prompt no es igual a -1 (falso) entonces al conocer el indice por el findIndex, realizaremos un push de ese indice hacia nuestra mochila, y luego, quitaremos ese objeto de la lista del vendedor.
    if (indice !== -1){
        mochila.push(vendedor[indice])
        vendedor.splice(indice,1);
        alert(`Has comprado: ${nombreCompra} y lo colocaste en tu mochila!`)
    }
};

//El metodo some en este caso me dara un resultado si el prompt es igual a lo que se esta en el valor del objeto (Objeto.nombre) por ende, se crea un while en donde si no es igual el prompt del objeto, se pedira que se escriba nuevamente. y volvera a hacer esa comparacion dentro del bucle hasta que si se cumpla.

let nombreEncontrado = vendedor.some(Objetos => Objetos.nombre === nombreCompra)
while (!nombreEncontrado) {
    alert("Debes escribir el nombre del objeto correctamente.")
    nombreCompra = prompt(`"Estos son los objetos que posee el mercader, ten en cuenta que tienes que escribir exactamente por como se llaman a continuacion:" ${(vendedor.map(Objetos => Objetos.nombre).join(', '))}`);
    nombreEncontrado = vendedor.some(Objetos => Objetos.nombre === nombreCompra);
}

comprarObjeto(nombreCompra);

//Tuve un problema que no pude resolver, pido disculpas, es lo mejor que pude hacer para que el codigo funcione, cuando se acaban los indices en el array de vendedor, el bucle while me crea un prompt extra en donde no hay valor alguno, entonces hay que apretar enter para continuar y luego el codigo sigue su curso.
//bucle for para que sigamos comprando a medida que vamos obteniendo los objetos, hasta que lleguemos a 0 y se detiene la compra.
for ( i = 1; i = cantidadObjetosVendedor; i++){
    nombreCompra = prompt(`"Estos son los objetos que posee el mercader, ten en cuenta que tienes que escribir exactamente por como se llaman a continuacion: ${(vendedor.map(Objetos => Objetos.nombre).join(', '))}"`);
    
    nombreEncontrado = vendedor.some(Objetos => Objetos.nombre === nombreCompra)
    if (vendedor.length == 0){
        alert("Ja! No se porque volvi a ofrecerte objetos cuando ya no los tenia! te pido disculpas, pero ya no tengo mas objetos que ofrecerte.")
        break;
    }
    while (!nombreEncontrado && vendedor.length > 1) {
        alert("Debes escribir el nombre del objeto correctamente.")
        nombreCompra = prompt(`"Estos son los objetos que posee el mercader, ten en cuenta que tienes que escribir exactamente por como se llaman a continuacion:" ${(vendedor.map(Objetos => Objetos.nombre).join(', '))}`);
        nombreEncontrado = vendedor.some(Objetos => Objetos.nombre === nombreCompra);
}
comprarObjeto(nombreCompra);
}

alert("Bueno... eso es todo lo que necesitas para forjar tu espada, ahora, ve hacia la herreria, hay un hombre muy alto y grande con un gran martillo alli, el es Thorson y creara tu espada.")

alert("Fuiste hacia la herreria, y observaste a Thorson, un hombre corpulento y gigante con muchas cicatrices encima, despacio fuiste entregando tus objetos.")
alert("'Que tal muchacho, dame los objetos que conseguiste y te fabricare la espada, el poder de la espada dependera de que tan buenos sean los materiales, veremos el valor de ellos y la suma de todos daran la calidad de la espada.")
//Para que se pueda observar en consola que se pasaron exitosamente los objetos de un array a otro.
console.log(vendedor);
console.log(mochila);

//Este for me sumara el valor de todos los objetos de la mochila.
let sumaMochila = 0;

for (let i = 0; i < mochila.length; i++) {
    sumaMochila += mochila[i].valor;
}

alert(`En total, luego de unir todos tus objetos, tu espada tendra ${sumaMochila} puntos de daño`);
alert("Ten muchacho, recien salida del horno, puedes probarla.")

alert("Quieres probar tu espada, su filo, su balance, y puedes observar cerca un muñeco de entrenamiento, deberias atacarlo.")

let dañoEspada = prompt("Usaremos unos dados para ver que tan fuerte has golpeado, escribe 'dados' ");

const DADOS = (min, max) =>{
    return(Math.round(Math.random() * (min, max)));
}
while(dañoEspada != "dados"){
    alert("Tienes que escribir 'dados'")
    dañoEspada = prompt("Usaremos unos dados para ver que tan fuerte has golpeado, escribe 'dados' ");
}
dañoEspada = DADOS(1,5);

alert(`has conseguido ${dañoEspada} puntos del dado! creo que es hora de darle un buen ultimo golpe al muñeco.`)

let dañoCompleto = sumaMochila * dañoEspada;

alert(`Te posicionas, sujetas firmemente tu espada nueva, respiras hondo y ejecutas un feroz golpe al muñeco, entre la paja y las maderas reventadas, observas que incluso se volvio irreparable, has hecho ${dañoCompleto} puntos de daño.`);
alert("Se esta poniendo el sol, es hora de descansar, no se sabe cuales seran tus proximas aventuras ahora que estas mejor equipado.")
