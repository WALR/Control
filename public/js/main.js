$(document).ready(function(){
        var socket = io();
        $('#garaje_on').on('click',function(){
        console.log("Encender Garaje")
        socket.emit('led',4);
        });
        $('#garaje_off').on('click',function(){
        console.log("Apagar Garaje")
        socket.emit('led',5);
        });
        $('#pub_on').on('click',function(){
        console.log("Encender Publica")
        socket.emit('led',6);
        });
        $('#pub_off').on('click',function(){
        console.log("Apagar Publica")
        socket.emit('led',7);
        });
        $('#sala_on').on('click',function(){
        console.log("Encender Sala")
        socket.emit('led',8);
        });
        $('#sala_off').on('click',function(){
        console.log("Apagar Sala")
        socket.emit('led',9);
        });
        $('#cocina_on').on('click',function(){
        console.log("Encender Cocina")
        socket.emit('led',10);
        });
        $('#cocina_off').on('click',function(){
        console.log("Apagar Cocina")
        socket.emit('led',11);
        });
        $('#dorm_on').on('click',function(){
        console.log("Encender Dormitorio")
        socket.emit('led',12);
        });
        $('#dorm_off').on('click',function(){
        console.log("Apagar Dormitorio")
        socket.emit('led',13);
        });
        $('#bano_on').on('click',function(){
        console.log("Encender Bano")
        socket.emit('led',14);
        });
        $('#bano_off').on('click',function(){
        console.log("Apagar Bano")
        socket.emit('led',15);
        });
        $('#izq').on('click',function(){
        console.log("Izquierda")
        socket.emit('led',1);
        });
        $('#der').on('click',function(){
        console.log("Derecha")
        socket.emit('led',0);
        });
        $('#ade').on('click',function(){
        console.log("Adelante")
        socket.emit('led',2);
        });
        $('#parar').on('click',function(){
        console.log("Parar")
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
        cambiarImagen('img_vehiculo','/img/carro.svg');
        socket.emit('led',2);
        };
        function parar(){
        console.log("atras: "+k);
        cambiarImagen('img_vehiculo','/img/carro.svg');
        socket.emit('led',3);
        };
        function derecha(){
        console.log("derecha: "+k);
        cambiarImagen('img_vehiculo','/img/carro-derecha.svg');
        socket.emit('led',0);
        };
        function izquierda(){
        console.log("izquierda: "+k);
        cambiarImagen('img_vehiculo','/img/carro-izquierda.svg');
        socket.emit('led',1);
        };

});