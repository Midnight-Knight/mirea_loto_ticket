const map = {
    r1c1: false,
    r1c2: true,
    r1c3: false,
    r1c4: true,
    r1c5: true,
    r1c6: false,
    r2c1: true,
    r2c2: false,
    r2c3: true,
    r2c4: false,
    r2c5: true,
    r2c6: false,
    r3c1: false,
    r3c2: true,
    r3c3: true,
    r3c4: false,
    r3c5: false,
    r3c6: true,
}
let row = 1;
const object = {};
let work = false;

object.r1c1 = null;
object.r1c2 = null;
object.r1c3 = null;
object.r1c4 = null;
object.r1c5 = null;
object.r1c6 = null;

object.r2c1 = null;
object.r2c2 = null;
object.r2c3 = null;
object.r2c4 = null;
object.r2c5 = null;
object.r2c6 = null;

object.r3c1 = null;
object.r3c2 = null;
object.r3c3 = null;
object.r3c4 = null;
object.r3c5 = null;
object.r3c6 = null;

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

function Open()
{
    if (row !== 4)
    {
        work = !work;
        let timerId = setInterval(() => {
            for(let column = 1; column <= 6; column++)
            {
                if (Boolean(Math.random() < 0.5))
                {
                    document.getElementById('r'+row+'c'+column).src = './resources/zero.svg';
                }
                else {
                    document.getElementById('r'+row+'c'+column).src = './resources/one.svg';
                }
            }
        },500)
        setTimeout(() => {
            clearInterval(timerId);
            for (let column = 1; column <= 6; column++)
            {
                if (map['r'+row+'c'+column])
                {
                    document.getElementById('r'+row+'c'+column).src = './resources/one.svg';
                }
                else {
                    document.getElementById('r'+row+'c'+column).src = './resources/zero.svg';
                }
            }
            row = row + 1;
            work = !work;
        }, 5000)
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' && work === false)
    {
        Open();
    }
});
