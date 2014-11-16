$(document).ready(function() {

var socket = io();
$('#der').on('click',function(){
    console.log("Encender Led")
    socket.emit('led',0);
});
$('#izq').on('click',function(){
    console.log("Apagar Led")
    socket.emit('led',1);
});
$('#ade').on('click',function(){
    console.log("Apagar Led")
    socket.emit('led',2);
});
$('#par').on('click',function(){
    console.log("Apagar Led")
    socket.emit('led',3);
});
function info (elEvento) {
    evento = elEvento || window.event;
k=evento.keyCode; //número de código de la tecla.
//alert(k)
//encender(k);
if(k==38){
    adelante();
}
else if(k==40){
    parar();
}
else if(k==39){
    derecha();
}
else if(k==37){
    izquierda();
}
}
window.onload = function() {
    document.onkeydown = info;
}
function adelante(){
    console.log("Adelante: "+k);
    socket.emit('led',2);
};
function parar(){
    console.log("atras: "+k);
    socket.emit('led',3);
};
function derecha(){
    console.log("derecha: "+k);
    socket.emit('led',0);
};
function izquierda(){
    console.log("izquierda: "+k);
    socket.emit('led',1);
};

}