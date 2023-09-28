// Gerar um número aleatório entre 0 e 100
const numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio);
//Math.random() gera número de 0 a 0.99 (mas nao 1)
//Math.random() * 100 gera número de 0 a 99.99 (mas nao 100)
//Math.random() * 100 + 1 gera número aleatório de 0 a 100
//Math.floor é para esse número aleatório ser inteiro somente e não decimal

let numTentativas = 0;
console.log(numTentativas);

// function () {}
//é igual a
// () => {}
//função é um agrupamento de códigos que executa uma determinada ação após algum evento por exemplo

document.getElementById('btChecar').addEventListener('click', function() { //ver pq o disabled não funcionou com arrow function
    const suposicao = parseInt(document.getElementById('suposicao').value); //faz a conversão de string para número inteiro
    numTentativas++; //numTentativas = numTentativas + 1
    console.log(numTentativas)
    if(suposicao === numAleatorio){
        document.getElementById("mensagem").textContent = `Parabéns você acertou em ${numTentativas} tentativas`;
        document.getElementById("mensagem").style.color = 'green';
        this.disabled = true
    }
    else if(suposicao < numAleatorio){ // 5 < 10
        document.getElementById("mensagem").textContent = "Tente um número maior";
        document.getElementById("mensagem").style.color = 'orange';
    }
    else{
        document.getElementById("mensagem").textContent = "Tente um número menor";
        document.getElementById("mensagem").style.color = 'red';
    }
});


