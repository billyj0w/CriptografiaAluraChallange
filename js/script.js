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
var ta = document.getElementById("mensagem");
var letterNumber = /^[a-z]+$/;
ta.addEventListener(
    'keypress',
    function (e) {
        // Test for the key codes you want to filter out.
        if (e.key.match(letterNumber)) {
            
        }else{
          alert('Apenas letras minúsculas e sem acento.');
            // Prevent the default event action (adding the
            // character to the textarea).
            e.preventDefault();
        }
    }
);

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

//DESCRIPTOGRAFANDO
  
  function descriptografar(){
    var textoCriptografado = document.getElementById("mensagemCriptografada").value;
    var listaSubstituicao = {
      enter:"e",
      imes:"i",
      ai:"a",
      ober:"o",
      ufat:"u"
    };
    
      descriptografarTexto = textoCriptografado.replace(/enter|imes|ai|ober|ufat/i, function(item){
        let it = listaSubstituicao[item];
        let itemLista = it.replace(/(?:^|\s)\S/g, function(elemento) { return elemento.toLowerCase(); });
        return itemLista;
        
    });   
    

    const textoSaida2 = document.querySelector('#mensagemCriptografada')
    textoSaida2.textContent = descriptografarTexto;
    console.log(descriptografarTexto);
  }
