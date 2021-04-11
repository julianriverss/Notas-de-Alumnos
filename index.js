
const sendButton = document.getElementById ('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
    }
    resultado = verificarAprobacion (8,4,mensaje);
    mensaje = definirMensaje (resultado[1]); //aveces es mejor no poner [1]
    } catch(e){
        resultado =  "¿SOS GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado[0],mensaje); //aveces es mejor no poner[0]
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "no podes ser tan HDP";
        break;
        case 2: resultado = "Sos malisimo";
        break;
        case 3: resultado = "NO sabes nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "mal pero  ya casi";
        break;
        case 6: resultado = "animo un poco más";
        break;
        case 7: resultado = "pasaste pero regular superate";
        break;
        case 8: resultado = "bien";
        break;
        case 9: resultado = "muy bien";
        break;
        case 10: resultado = "sos un crack";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1+nota2+prevRes)/3;
    if (promedio >= 7) {
        return "<span class='green'> APROBADO </span>";
    }
    return "<span class='red'> DESAPROBADO </span>";
} 

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    console.log(res);
    console.log(msg);
}