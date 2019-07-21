function id( el ){
    return document.getElementById( el );
}
function val( destino, valor ){
    destino.value += valor;
}
var focus = false;
window.onload = function(){
   
   
    var botoes = id('teclado').getElementsByTagName('input');
    for( var i=0; i<botoes.length; i++ ){
            botoes[i].onclick = function(){
                    val( id( focus ), this.value );
                    id( focus ).focus();
            }
    }
   
    var inputs = id('area').getElementsByTagName('input');
    for( var i=0; i<inputs.length; i++ ){
            inputs[i].onfocus = function(){
                    focus = this.id;
            }
    }
    id('entrada_1').focus();
}
ij=1;
function contador(){
    ij++;
    if(ij>=7){
        fimJogo()
    }
}
function novoJogo(){
    tempo();
    escolherPalavra();
}
let lista=["Josh-Radnor", "Ted-Mosby","Bob-Saget", "Ted", "Cobie Smulders", "Robin", "Neil-Patrick-Harris","Barney", "Jason-Segel","Marshall", "Alyson-Hannigan", "Lily", "Cristin-Milioti", "Tracy"];
let nivelDificil=false;
function escolherPalavra(lista){
let i = lista.length-1;
random2 = Math.floor(Math.random() * i);    
while(i>6 && nivelDificil==true){
    random2 = Math.floor(Math.random() * i);
    }

console.log(lista[random2]);
}