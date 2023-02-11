const btnElements = document.querySelectorAll('.controle-ajuste');
const counterControls = document.querySelectorAll('.controle-contador');


for(let i = 0; i < btnElements.length; i++){

    //definindo a posição correspondente ao input '.controle-contador'
    var n = Number.isInteger(i / 2) ? parseInt(i / 2) : Math.trunc(i / 2);

    const btn = btnElements[i];
    const control = counterControls[n];

    btn.addEventListener('click', () => {
        equalizeRobotrom(btn.textContent, control);
    });

}



function equalizeRobotrom(operator, comp){
    var controlValue = parseInt(comp.value);

    if(operator === '-' & controlValue > 0){
            comp.value = controlValue - 1;
    }else if(operator === '+'){
        comp.value = controlValue + 1;
    }
}