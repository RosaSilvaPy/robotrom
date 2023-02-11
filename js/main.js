const buttons = document.querySelectorAll("[data-controle]");
const statistics  = document.querySelectorAll("[data-estatistica]");
const btnReload = document.querySelector('#producao');


const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


// Utilizando foreach javascript
buttons.forEach( (btn)=>{
    var componentValue = 0;
    btn.addEventListener('click', (event)=>{
        componentValue = equalizeRobotrom(event.target.dataset.controle, event.target.parentNode);

        //Três parametros: sinal + ou -  ,  componente/peça  , valor atual da peça
        updateStats(event.target.dataset.controle, event.target.dataset.peca, componentValue);
    });
});


btnReload.addEventListener('click', ()=>{
    location.reload();
});



function equalizeRobotrom(operator, parent){
    const comp = parent.querySelector("[data-contador]");
    var controlValue = parseInt(comp.value);

    if(operator === '-' & controlValue > 0){
            comp.value = controlValue - 1;
    }else if(operator === '+'){
        comp.value = controlValue + 1;
    }
    //Retorna o valor atual da peça para: se "0" bloquea o decremnto da estatistica.
    return parseInt(comp.value);
}

function  updateStats(operator, part, componentValue){
    //else if(componentValue > 0) Se a peça tiver o valor "0", clicando não pode alterar a estatistica.
    statistics.forEach((element)=>{
        if(operator === '+'){
            element.textContent = parseInt(element.textContent) + parts[part][element.dataset.estatistica];
        }else if(componentValue > 0){
            element.textContent = parseInt(element.textContent) - parts[part][element.dataset.estatistica];
        }
    });
    
}
   
