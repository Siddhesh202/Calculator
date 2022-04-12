var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;

function cal_logic()
{
    var value = this.getAttribute('data-value');

    if(value == '+' || value == '/' || value == '*' || value == '-' || value == '**' || value == '%')
    {
        operator = value;
        console.log(operator);
        operand1 = parseFloat(display.textContent);
        if(value == '**')
        {
            display.innerText = '^';
            return;
        }
        display.innerText = value;
    }

    else if(value == '=')
    {
        operand2 = parseFloat(display.textContent);
        display.innerText = eval(operand1 + " " + operator + " " + operand2);
        operand1 = eval(operand1 + " " + operator + " " + operand2);
        operand2 = null;
        operator = null;
    }

    else if(value == 'AC')
    {
        display.innerText = "";
        operand1 = 0;
        operand2 = null;
        operator = null;
    }

    else
    {
        if(operator != null)
        {
            if(display.innerText == '+' || display.innerText == '/' || display.innerText == '*' || display.innerText == '-' || display.innerText == '^' || display.innerText == '%')
            {
                display.innerText = "";
            }

        }

        display.innerText += value;
    }
}

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', cal_logic);
}