function ProcesarRespuestas(){
    let total = 5
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["a", "b", "c", "a", "b"];

    for (let i = 1; i<= total; i++) {
        if (myForm["r" + i].value == null ||
            myForm["r" + i].value ==  '') {

            alert('Responder las preguntas en su totalidad');
            return false; 
        } else{
            if (myForm ["r" + i]. value == respuestasCorrectas[i - 1])
                puntos++;
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= 'Obtuviste '+puntos+' puntos de '+ total + ' Posibles ';
    return false;
}