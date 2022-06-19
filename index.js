
let calcSum = (firstNumber, secondNumber) => firstNumber + secondNumber;
let calcSub = (firstNumber, secondNumber) => firstNumber - secondNumber;
let calcmult = (firstNumber, secondNumber) => firstNumber * secondNumber;
let calcdel = (firstNumber, secondNumber) => firstNumber / secondNumber;


function doNothing() { 

    const firstNumber = +prompt('Enter first number');
    const secondNumber = +prompt('Enter second number');
    const operation = prompt('Enter operator');
    


if (isNaN(firstNumber, secondNumber)){  
  alert ('Некорректный ввод');

} else if (operation ==='-') {
  alert (calcSub(firstNumber, secondNumber));

} else if (operation ==='+'){
    alert (calcSum(firstNumber, secondNumber));
 
} else if (operation ==='*'){
  alert (calcmult(firstNumber, secondNumber));
 
} else if (operation ==='/'){
  alert (calcdel(firstNumber, secondNumber));

}

}
 doNothing( );