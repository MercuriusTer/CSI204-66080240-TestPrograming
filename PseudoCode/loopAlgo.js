function runForLoop() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerText = `ตัวเลข: ${result}`;
}

function startWhileLoop() {
    let userInput;
    let result = "คุณพิมพ์: ";
    while (true) {
        userInput = prompt("กรุณาป้อนข้อความ (พิมพ์ 'exit' เพื่อออก):");
        if (userInput.toLowerCase() === "exit") {
            document.getElementById("whileLoopResult").innerText = result;
            break;
        }
        result += userInput + " ";
    }
}