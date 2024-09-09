//Exercicio 1

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

//Exercicio 2

function Fibonacci(n) {
    let a = 0, b = 1;
    
    while (b <= n) {
        if (b === n) {
            return `O número ${n} pertence a sequência de Fibonacci.`;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return `O número ${n} não pertence a sequência de Fibonacci.`;
}

console.log(Fibonacci(20));

//Exercicio 3

function calcularFaturamento(faturamento) {
    const faturamentoValido = faturamento.filter(valor => valor > 0);
    const menorFaturamento = Math.min(...faturamentoValido);
    const maiorFaturamento = Math.max(...faturamentoValido);

    const somaFaturamento = faturamentoValido.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaFaturamento / faturamentoValido.length;

    const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const faturamentoDiario = [1, 130, 200, 0, 100, 180, 90, 0, 500, 300, 50, 600, 0, 0, 230, 500, 700, 0, 0, 3000, 320, 0, 0, 100, 300, 0, 200, 150, 400, 800];

const resultado = calcularFaturamento(faturamentoDiario);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);

//Exercicio 4

function calcularPercentuais(faturamentoEstados) {
    const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (let estado in faturamentoEstados) {
        const percentual = (faturamentoEstados[estado] / faturamentoTotal) * 100;
        percentuais[estado] = percentual.toFixed(2); // Formata com duas casas decimais
    }

    return percentuais;
}

const faturamentoEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};
const percentuais = calcularPercentuais(faturamentoEstados);

console.log("Percentual de representação de cada estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}

//Exercicio 5

function inverterString(string) {
    let invertido = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertido += string[i];
    }
    
    return invertido;
}

const stringOriginal = "Rosilane";
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);





