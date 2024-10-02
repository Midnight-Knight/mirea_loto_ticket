const object = {};
object.r1c1 = localStorage.getItem('r1c1');
object.r1c2 = localStorage.getItem('r1c2');
object.r1c3 = localStorage.getItem('r1c3');
object.r1c4 = localStorage.getItem('r1c4');
object.r1c5 = localStorage.getItem('r1c5');
object.r1c6 = localStorage.getItem('r1c6');

object.r2c1 = localStorage.getItem('r2c1');
object.r2c2 = localStorage.getItem('r2c2');
object.r2c3 = localStorage.getItem('r2c3');
object.r2c4 = localStorage.getItem('r2c4');
object.r2c5 = localStorage.getItem('r2c5');
object.r2c6 = localStorage.getItem('r2c6');

object.r3c1 = localStorage.getItem('r3c1');
object.r3c2 = localStorage.getItem('r3c2');
object.r3c3 = localStorage.getItem('r3c3');
object.r3c4 = localStorage.getItem('r3c4');
object.r3c5 = localStorage.getItem('r3c5');
object.r3c6 = localStorage.getItem('r3c6');

for (let i = 1; i <= 3; i++)
{
    for (let j = 1; j <= 3; j++)
    {
        if(object["r"+i+"c"+j] === 'true')
        {
            object["r"+i+"c"+j] = true;
        }
        if(object["r"+i+"c"+j] === 'false')
        {
            object["r"+i+"c"+j] = false;
        }
        if(object["r"+i+"c"+j] === 'null')
        {
            object["r"+i+"c"+j] = null;
        }
    }
}

console.log(object);

function render()
{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 6; j++) {
            if (object['r'+(i+1)+'c'+(j+1)] === true)
            {
                document.getElementById('r'+(i+1)+'c'+(j+1)).src = './resources/one.svg';
            }
            else if (object['r'+(i+1)+'c'+(j+1)] === false)
            {
                document.getElementById('r'+(i+1)+'c'+(j+1)).src = './resources/zero.svg';
            }
            else
            {
                document.getElementById('r'+(i+1)+'c'+(j+1)).src = './resources/values.svg';
            }
        }
    }
}

window.addEventListener('load', () => render())

let KeyR = false;
let KeyC = false;
let valueR = null;
let valueC = null;
let lastKet = null;

document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyR' && KeyR === false) {
        KeyR = true;
        lastKet = 'R';
    }
    else if (event.code === 'KeyC' && KeyC === false) {
        KeyC = true;
        lastKet = 'C';
    }
    else if ((event.code === 'Digit1' || event.code === 'Digit0' || event.code === 'KeyN') && KeyR === true && KeyC === true && valueR !== null && valueC !== null)
    {
        if (event.code === 'Digit1')
        {
            object['r'+valueR+"c"+valueC] = true;
        }
        if (event.code === 'Digit0')
        {
            object['r'+valueR+"c"+valueC] = false;
        }
        if (event.code === 'KeyN')
        {
            object['r'+valueR+"c"+valueC] = null;
        }
        localStorage.setItem('r'+valueR+"c"+valueC, object['r'+valueR+"c"+valueC]);
        render();
        KeyR = false;
        KeyC = false;
        valueR = null;
        valueC = null;
        lastKet = null;
    }
    else if ((event.code === 'Digit1' || event.code === 'Digit2' || event.code === 'Digit3') && KeyR === true && lastKet === 'R')
    {
        switch (event.code) {
            case "Digit1":
                valueR = 1;
                break;
            case "Digit2":
                valueR = 2;
                break;
            case "Digit3":
                valueR = 3;
                break;
        }
        lastKet = null;
    }
    else if ((event.code === 'Digit1' || event.code === 'Digit2' || event.code === 'Digit3' || event.code === 'Digit4' || event.code === 'Digit5' || event.code === 'Digit6') && KeyC === true && lastKet === 'C')
    {
        switch (event.code) {
            case "Digit1":
                valueC = 1;
                break;
            case "Digit2":
                valueC = 2;
                break;
            case "Digit3":
                valueC = 3;
                break;
            case "Digit4":
                valueC = 4;
                break;
            case "Digit5":
                valueC = 5;
                break;
            case "Digit6":
                valueC = 6;
                break;
        }
        lastKet = null;
    }
    else
    {
        KeyR = false;
        KeyC = false;
        valueR = null;
        valueC = null;
        lastKet = null;
    }
});
