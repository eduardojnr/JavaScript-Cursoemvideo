let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(typeof(num)) // Object
num.push(11) //Adiciona o valor ao final
num.length // 11
num.sort()
num.indexOf(1) // 2  || Retorna -1 caso aquele indice não exista

// Iteração
for (let i = 0; i < num.length; i ++) {}

for (let i in num) {}