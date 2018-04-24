//Dado un arrgeglo vamos a multplicar cada elemento por 2, filtrar los mayores a 10
//y ordenarlos de manera ascendente

let original = [4,6,7,9,10]

const mapX2 = (array) => {
    let arrAux = [];
    for(let i in array) {
        arrAux.push(array[i]*2);
    }
    return arrAux;
}

const filtrarBy10 = (array2) => {
    let arrAux = [];
    for(let i in array2) {
        if(array2[i]>=10){
            arrAux.push(array2[i])
        }
    }
    return arrAux;

}



function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

original = mapX2(original)
original = filtrarBy10(original)
original = quickSort(original,0,original.length-1)

console.log(original)
console.log("-------------------------")

let original2 = [4,6,7,9,10]

const resultado = original2
    .map((num) => num*2)
    .filter(num => num>=10)
    .sort(original2)


console.log(resultado)

//Dado un arreglo todos los numeros pares ordenados de mayor a menor
let original3 = [1,3,5,2,10,4,6]
const resultado2 = original3
    .filter(num => num%2==0)
    .sort((a,b) => a-b)
    //investigar

console.log(resultado2)

/*Escribe una funcion que tome una cadena de palabras en mayusculas y la regrese en minusculas.
        Entrada: [“hola”,“como”,“estas”]
        Salida: [“HOLA”,“COMO”,“ESTAS”] */

let arreglomin = ["hola","como","estas"]
const resultado3 = arreglomin
    .map((palabra) => {return palabra.toUpperCase()})

console.log(resultado3)

/*Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.

        Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
        Saloida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,“YEI”] */

let arreglocaps = ["hola amigos", "cinta roja cdmx y gdl","yei"]
const resultado4 = arreglocaps
    .map(frase => {
        let split = frase.split(" ")
        for (i in split){
            if(i%2==0){
               split[i] = split[i].toUpperCase();
            }else {split[i] = split[i].toLowerCase()}
        }
        return split
         .reduce((prev,curr) => prev + " " +curr)
         // toma los elementos de un objeto primero el lugar 1 y 2 y hace la función
         //indicada
    })
console.log(resultado4);

/*3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas) */

let arregloMinutos = [120, 80, 200, 100]
const resultado5 = arregloMinutos
    .map(num => num/60)
    .filter(num => num>= 2)
    .map(num => num*60)
console.log(resultado5);

/*3. 4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30 */
let arreglomult = [1, 3, 5, 7, 9]
const resultado6 = arreglomult
    .map(num => num*7)
    .filter(num => num<30)
console.log(resultado6)

