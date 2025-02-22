function factorial(n) {
    if(n == 0 || n == 1){
        return 1
    }
    else{
        return sum = n*factorial(n-1)
    }
}

function fibonacci(n) {
    if(n == 0 ){
        return 0
    }
    else if(n == 1){
        return 1
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

function calculateFactorial() {
    let n = parseInt(document.getElementById("factorialInput").value);
    if (n < 0 || isNaN(n)) {
        alert("กรุณาใส่ค่าให้ถูกต้อง!")
        return;
    }
    alert('ผลลัพธ์: ' + factorial(n))
}

function calculateFibonacci() {
    let n = parseInt(document.getElementById("fibonacciInput").value);
    if (n < 0 || isNaN(n)) {
        alert("กรุณาใส่ค่าให้ถูกต้อง!")
        return;
    }
    alert('ผลลัพธ์: ' + fibonacci(n))
}