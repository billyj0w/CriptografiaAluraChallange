//COPIANDO TEXTO
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    copyTextareaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.js-copytextarea');
    copyTextarea.focus();
    copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'Copiado!' : 'Erro!';
    console.log('O texto foi ' + msg);
  } catch (err) {
    console.log('Erro!');
  }
});

//BLOQUEANDO LETRAS MAIUSCULAS E SIMBOLOS
  ta = document.getElementById('mensagem');
  var letterNumber = /^[a-z]+$/;
  ta.addEventListener('beforeinput', function(e) {
    // Test for the key codes you want to filter out.
    if (/[^a-z\s]/.test(e.data)) {
      e.preventDefault();
    }
});

//CRIPTOGRAFANDO TEXTO
function limpar(mensagemCriptografada){
    document.getElementById("mensagemCriptografada").innerHTML = "";    
    document.getElementById("desaparece").style.display = "inline-flex";
    document.getElementById("aparece").style.display = "none";

}

function criptografar(){
    document.getElementById("desaparece").style.display = "none";
    document.getElementById("aparece").style.display = "inline-flex";


var strLista = document.getElementById("mensagem").value;
var listaSubstituicao = {
  e:"enter",
  i:"imes",
  a:"ai",
  o:"ober",
  u:"ufat"
};
alteracaoLista = strLista.replace(/e|i|a|o|u/gi, function(item){
    let it = listaSubstituicao[item];
    let itemLista = it.replace(/(?:^|\s)\S/g, function(elemento) { return elemento.toLowerCase(); });
    return itemLista;

});
    
const textoSaida = document.querySelector('#mensagemCriptografada')
textoSaida.textContent = alteracaoLista;
console.log(alteracaoLista);


}

function descriptografar() {
    let text = document.getElementById('mensagemCriptografada').value.toLowerCase()

    let encryptedText = text.replace(/enter/igm, "e")
    encryptedText = encryptedText.replace(/ober/igm, "o")
    encryptedText = encryptedText.replace(/imes/igm, "i")
    encryptedText = encryptedText.replace(/ai/igm, "a")
    encryptedText = encryptedText.replace(/ufat/igm, "u")


    const textoSaida = document.querySelector('#mensagemCriptografada')
    textoSaida.textContent = encryptedText;
}
