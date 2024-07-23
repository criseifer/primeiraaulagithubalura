let nome = "cristiane fensterseifer"
console.log(`bemvinda ${nome}`)

let pergunta = prompt ("qual a linguagem de programação vc mais gosta?")
console.log (`${pergunta}`)

let valor1 = 2
let valor2 = 5
let resultadosoma = valor1 + valor2
console.log(`a soma de ${valor1} com ${valor2} é ${resultadosoma}` )

let resultadosubtracao = valor1 - valor2
console.log(`a subtração de ${valor1} com ${valor2} é ${resultadosubtracao}` )

let idade = prompt ("insira idade")
if (idade > 18)
    alert("pode dirigir")
else
    alert("PRECISA CRESCER")

let numero = prompt ("escreva um numero")
if (numero == 0)
    alert('zero')
if(numero > 0)
    alert("positivo")
else
    alert("negativo")

let loop = 0
while(loop < 10)
    alert(loop = loop + 1)
