const calculation1 = document.getElementById("calculation1");
const calculation2 = document.getElementById("calculation2");
const btnCalculate = document.getElementById("btnCalculate");
const resultShow = document.getElementById("result");
const form = document.getElementById("formulario")



form.addEventListener("submit", addInputs)

function addInputs(event) //Evento que viene del addeventlistener cuando envía el "submit o click"
{
    event.preventDefault(); //previene queejecute lo que por defecto debería ejecutar el evento
    result = parseFloat(calculation1.value) + parseFloat(calculation2.value)
    resultShow.innerText = result 
}