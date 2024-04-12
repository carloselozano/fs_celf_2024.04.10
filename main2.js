
    function validarNombre(){
        let nombre= document.getElementById("nombre").value;
        console.log(nombre);
        let formato=/^[a-zA-Z\s]+$/;

        if(nombre==""){
            document.getElementById("errorNombre").style.display = "block";
            document.getElementById("errorNombre").innerHTML = "El campo Nombre es obligatorio";
        }
       else{ if(!formato.test(nombre)){
                document.getElementById("errorNombre").style.display ="block";
                document.getElementById("errorNombre").innerHTML="Ingrese carácteres válidos para el Nombre";
                }
             else
                document.getElementById("errorNombre").style.display ="none";  
       }
    }

    function validarTelefono(){
        let telefono= document.getElementById("telefono").value;
        console.log(telefono);
        let formato=/^3[0-9]{2}-[0-9]{4}-[0-9]{3}$/;

        if(telefono==""){
            document.getElementById("errorTelefono").style.display = "block";
            document.getElementById("errorTelefono").innerHTML = "El campo Telefono es obligatorio";
        }
       else{ if(!formato.test(telefono)){
                document.getElementById("errorTelefono").style.display ="block";
                document.getElementById("errorTelefono").innerHTML="Ingrese formato válido para el teléfono 3XX-4444-444";
                }
             else
                document.getElementById("errorTelefono").style.display ="none";  
       }
    }


    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("telefono").addEventListener("blur", validarTelefono);

    function enviarFormulario(){
       console.log("Enviar Formulario")
    }
    
    document.getElementById("btnEnviar").addEventListener("click",enviarFormulario);
    //document.getElementById("btnEnviar").addEventListener("click",validarNombre);



