/*
1-
const alunos = [];
const notas = [];
const numAlunos = 5;

for (let i = 0; i < numAlunos; i++) {
    const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    const nota = parseFloat(prompt(`Digite a nota de ${nome}:`));
    alunos.push(nome);
    notas.push(nota);
}

const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / numAlunos;

console.log(`Média: ${media}`);
console.log('Alunos abaixo da média:');
for (let i = 0; i < numAlunos; i++) {
    if (notas[i] < media) {
        console.log(alunos[i]);
    }
}

2-
const numeros = [];
const numInteiros = 10;

for (let i = 0; i < numInteiros; i++) {
    const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

console.log('Índices de números negativos:');
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        console.log(i);
    }
}

3-
const A = [];
const B = [];
const C = [];
const numValores = 5;

for (let i = 0; i < numValores; i++) {
    const valor = parseFloat(prompt(`Digite o valor ${i + 1} para o vetor A:`));
    A.push(valor);
}

for (let i = 0; i < numValores; i++) {
    B.push(Math.floor(Math.random() * 10));
}

for (let i = 0; i < numValores; i++) {
    C.push(A[i] * B[i]);
}

console.log('Vetor C (produto dos vetores A e B):', C);

4-
const valores = [];
const numValores = 10;

for (let i = 0; i < numValores; i++) {
    valores.push(Math.floor(Math.random() * 100));
}

const min = parseInt(prompt('Digite o valor mínimo do intervalo:'));
const max = parseInt(prompt('Digite o valor máximo do intervalo:'));

console.log(`Valores no intervalo [${min}, ${max}]:`);
for (let i = 0; i < valores.length; i++) {
    if (valores[i] >= min && valores[i] <= max) {
        console.log(`Índice: ${i}, Valor: ${valores[i]}`);
    }
}

*/ 