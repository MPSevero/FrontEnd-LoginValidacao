
function checagem(){

var nome = document.getElementById('fname').value;
var sobrenome = document.getElementById('fsobrenome').value;
var email = document.getElementById('femail').value;
var data = document.getElementById('fdata').value;
var senha = document.getElementById('fsenha').value;
var senhac = document.getElementById('fsenhac').value;

if(nome === '' || sobrenome === '' || email === '' || data === '' || senha === '' || senhac === ''){
 
    alert('Os campos devem ser preenchidos!');
}

else( alert('Conta Criada!'))
    

}