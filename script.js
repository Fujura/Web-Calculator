const button = document.querySelector('#ShowButton');
function GetCalculator(){
    for(let i = 0; i<2; i++){
        if(i < 1 ){
            document.getElementById("ShowButton").disabled = true; 

        }
    }
    const div = document.createElement('div');
    div.setAttribute('id', 'CalculatorDiv');
    document.body.appendChild(div)

    
    const input1 = document.createElement('input');
    input1.setAttribute('class', 'input firstinput');
    document.body.appendChild(input1);
    input1.placeholder = "Введите Первое Число"

    const input2 = document.createElement('input');
    input2.setAttribute('class', 'input secondinput');
    document.body.appendChild(input2);
    input2.placeholder = "Введите Второе Число"

    const plus = document.createElement('button');
    plus.setAttribute('class', 'calc plus');
    plus.textContent = '+';
    document.body.appendChild(plus)

    const minus = document.createElement('button');
    minus.setAttribute('class', 'calc minus');
    minus.textContent = '-';
    document.body.appendChild(minus)

    const devide = document.createElement('button');
    devide.setAttribute('class', 'calc devide');
    devide.textContent = '/';
    document.body.appendChild(devide)

    const multiply = document.createElement('button');
    multiply.setAttribute('class', 'calc multiply');
    multiply.textContent = '*';
    document.body.appendChild(multiply)

    const EnterButton = document.createElement('button');
    EnterButton.setAttribute('class', 'EnterButton');
    document.body.appendChild(EnterButton);
    EnterButton.textContent = "Calculate";

    let sum = 0;
    function TouchPlus(){
        sum = parseFloat(input1.value) + parseFloat(input2.value); 
    }
    plus.addEventListener('click', TouchPlus);

    function TouchMinus(){
        sum = parseFloat(input1.value) - parseFloat(input2.value); 
    }
    minus.addEventListener('click', TouchMinus);

    function TouchDevide(){
        sum = parseFloat(input1.value) / parseFloat(input2.value); 
    }
    devide.addEventListener('click', TouchDevide);

    function TouchMultiply(){
        sum = parseFloat(input1.value) * parseFloat(input2.value); 
    }
    multiply.addEventListener('click', TouchMultiply);

    function GetNum(){
        const result = document.createElement('p');
        result.setAttribute('id', 'ResultText')
        result.textContent = "Result: " + sum;
        document.body.appendChild(result)

    }
    EnterButton.addEventListener('click', GetNum);

    const divCalc = document.createElement('div');
    divCalc.setAttribute('class', 'divka');
    document.body.appendChild(divCalc);
    divCalc.appendChild(plus);
    divCalc.appendChild(minus);
    divCalc.appendChild(devide);
    divCalc.appendChild(multiply);


    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(divCalc)
    div.appendChild(EnterButton);
    

    
}

button.addEventListener('click', GetCalculator)