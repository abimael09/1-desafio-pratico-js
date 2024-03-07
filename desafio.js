alert ('Boas-vindas ao nosso site');

// atributos
let nome = 'Lua';
let idade = 25;
let quantVendas = 50;
let saldoAtual = 1000;

// imprimindo dados
alert ('Nome: ' + nome + '\n'+ 'idade: ' + idade + '\n' + 'Quant. Vendas: ' + quantVendas + '\n' + 'Saldo Atual: ' + saldoAtual);

// notificando erros
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);

// solicitando dados do usuário
nome = prompt ("Informe o seu nome:");
idade = prompt ('Informe a sua idade:');

// estrutura condicional
if (idade >= 18) {
    alert ('Pode tirar a habilitação!');
} else {
    alert ('Você ainda é menor de idade, por isso, não pode tirar a habilitação!');
}

// feedback funcional no console do navegador: atalho (F12)
console.log ('Funcionou? Aêêê, bom demais!!!');