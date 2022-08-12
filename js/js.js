function welcome(){
    var nome = prompt("Insere teu nome: ");
    document.write("<h1> Bem Vindo, " + nome + "</h1>"); 
}

nome();

function calc(e){
    var operacao = e.value;
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var calculo = eval(n1+operacao+n2);
    if(!isNaN(calculo)){
        document.getElementById("Total").value=calculo;
    }
}

function limpar(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    n1.value = "";
    n2.value = "";
    document.getElementById("Total").value = "";
    }
