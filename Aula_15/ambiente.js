let num = [5, 8, 2, 9, 3];
num.sort();
num.push(1);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O 1º valor do vetor é ${num[0]}`);
let pos = num.indexOf(8);
if(pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor está na posição ${pos}`);
}
/*
num.push(7) ---> Adiciona o valor entre parênteses na última posição do array.

num.length ---> Retorna o tamanho do array (quantas posições têm).

num.sort ---> Ordena o array na forma "crescente".
*/