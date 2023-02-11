const buttons = document.querySelectorAll("[data-controle]");
const statistics  = document.querySelectorAll("[data-estatistica]");


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
    btn.addEventListener('click', (event)=>{
        equalizeRobotrom(event.target.dataset.controle, event.target.parentNode);
        updateStats(event.target.dataset.controle, event.target.dataset.peca);
    });
});



function equalizeRobotrom(operator, parent){
    const comp = parent.querySelector("[data-contador]");
    var controlValue = parseInt(comp.value);

    if(operator === '-' & controlValue > 0){
            comp.value = controlValue - 1;
    }else if(operator === '+'){
        comp.value = controlValue + 1;
    }
}

function  updateStats(operator, part){
    statistics.forEach((element)=>{
        if(operator === '+'){
            element.textContent = parseInt(element.textContent) + parts[part][element.dataset.estatistica];
        }else{
            element.textContent = parseInt(element.textContent) - parts[part][element.dataset.estatistica];
        }
    });
    
}
    

