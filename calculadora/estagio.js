
    function insert(x){

        var numero = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = numero + x;  
    }

    function clean(x){
        document.getElementById ("resultado").innerHTML = "";
    }

    function back(x){
         var resultado = document.getElementById ("resultado").innerHTML;
         document.getElementById ("resultado").innerHTML = resultado.substring(0,resultado.length-1);
    }

    function calcular(x){
        var resultado = document.getElementById("resultado").innerHTML;
        if(resultado)
        {
            document.getElementById("resultado").innerHTML = eval(resultado);
        }
        else{
            document.getElementById("resultado").innerHTML = "Nada."

        }

    }