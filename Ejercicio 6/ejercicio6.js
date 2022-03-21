// Funcion que elimina elementos de un arreglo, los elementos a eliminar son los
// que estan en el arreglo filtro , se hace con diferencia de conjuntos
const arrayDiff = (arrayToFilter, filter) => 
    arrayToFilter.filter(x => !filter.includes(x));



//Test
console.log(arrayDiff([1,2],[1]))
console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1,2,2,2,3,5,6,7,4,3,5],[2,5]))