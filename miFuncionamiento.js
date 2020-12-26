
document.getElementById("image").style.display = 'none';

document.getElementById("myButton").addEventListener("click", function( event ) {
    
   if(document.getElementById("myName").value == ''){

        alert("ingrese su nombre primero");
   }
   else{

        name = document.getElementById("myName").value;
        document.getElementById("myName").value = '';
        document.getElementById("messageOfWelcome1").innerHTML = "Bienvenido a nuestra web usuario " + name + "...";
        document.getElementById("messageOfWelcome2").innerHTML = "pagina web desarrollada por futuros Analistas Programadores";
        document.getElementById("messageOfWelcome3").innerHTML = "del Instituto Santo Tomas, sede Ovalle";
        document.getElementById("image").style.display = '';
   }
   
});



