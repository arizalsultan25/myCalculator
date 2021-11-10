// Reset value
function clear(){
    calculator.result.value = null;
}

// Tekan tombol
function press(text){
    calculator.result.value = calculator.result.value + text;
}

// Hitung
function calculate(){
    calculator.result.value = eval(calculator.result.value);
}