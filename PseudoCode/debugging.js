function divideNumbers() {
    try {
        let a = parseFloat(document.getElementById("num1").value);
        let b = parseFloat(document.getElementById("num2").value);

        console.log("ค่า a:", a);
        console.log("ค่า b:", b);

        if (isNaN(a) || isNaN(b)) {
            throw new Error("กรุณาใส่ตัวเลขที่ถูกต้อง!");
        }
        if (b === 0) {
            throw new Error("ไม่สามารถหารด้วยศูนย์ได้!");
        }

        let result = a / b;
        console.log("ผลลัพธ์:", result);

        document.getElementById("resultDivide").innerText = `ผลลัพธ์: ${result.toFixed(2)}`;
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        document.getElementById("resultDivide").innerText = error.message;
    }
}