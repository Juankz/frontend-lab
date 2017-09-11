var $elem = document.getElementById("output");
$elem.innerHTML += 'Test'
$elem.innerHTML += 4 + 5;
$elem.innerHTML += " demo " + 4 + 5;
$elem.innerHTML += " demo " + (4 + 5);

function addCar(car){
  $elem.innerHTML += " "+car+" ";
}

//Arreglos
var cars = ["Audi","Ferrari", "Wolkswagen"];
cars.forEach(addCar);

//Otra forma de declarar arreglos
cars = new Array("Volvo, Renault");
cars.forEach(addCar);

//Probar variables
var testVariable;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
