const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const Form = document.getElementById('form-exercicio');
let formEValido = false;
const mensagemSucesso = 'Numeros validos, Valor B superior ao Valor A';
const mensagemErro = 'Numero A superior ao Numero B'

function validaNumero(numeroA,numeroB) {
    return numeroA < numeroB;
}

Form.addEventListener('submit',function(e){
    e.preventDefault();
const containerErro = document.querySelector('.menssagem-erro').innerHTML = mensagemErro;
formEValido = validaNumero(numeroA.value,numeroB.value);
if(formEValido){
    numeroA.value = '';
    numeroB.value = '';
    const containerSucesso = document.querySelector(".menssagem-sucesso");
    containerSucesso.innerHTML = mensagemSucesso;
    containerSucesso.style.display = 'block';
} else {
    document.querySelector('.menssagem-erro').innerHTML = mensagemErro;
    const containerErro = document.querySelector('.menssagem-erro');
    containerErro.innerHTML = mensagemErro;
    containerErro.style.display = 'block'
}})

numeroA.addEventListener('keyup',function(e){
console.log(e)
formEValido = validaNumero(numeroA.value,numeroB.value)
const containerErro = document.querySelector('.menssagem-erro');
const containerSucesso = document.querySelector(".menssagem-sucesso");
if(!formEValido){
    containerErro.innerHTML = mensagemErro;
    containerErro.style.display = 'block';
}})

numeroB.addEventListener('keyup',function(e){
    formEValido = validaNumero(numeroA.value,numeroB.value)
    console.log(e)
    const containerErro = document.querySelector('.menssagem-erro');
    const containerSucesso = document.querySelector(".menssagem-sucesso");
    if(formEValido){
        document.querySelector('.menssagem-erro').style.display='none';}})