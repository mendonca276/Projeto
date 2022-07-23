
function pegarDados(){
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var cpf2 = document.getElementById('cpf2').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var cep = document.getElementById('cep').value;
    var cep2 = document.getElementById('cep2').value;
    var email = document.getElementById('email').value;
    var login = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    var passconfirm = document.getElementById('passconfirm').value;
    var salvar = document.getElementById('salvar').value;


   var resultado = nome+ "" + sobrenome+ "" + dia+ "/" + mes+ "/" + ano+ "/" + rg+ "-" + cpf+ "/" + cep2+ "/" + numero+ "" + bairro+ "" + estado+ "" + cidade+ "" + cep+ "-" +
   cep2+ "-" + email+ "" + login+ "" + pass+ "" + passconfirm+ "" + salvar;

   console.log(resultado);
    alert('resultado');

}

