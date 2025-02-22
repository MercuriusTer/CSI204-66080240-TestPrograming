function calculateArea() {
    let radius = document.getElementById("radius").value;

    if (radius === "" || radius <= 0) {
        resultElement.innerText = "กรุณากรอกรัศมีที่มากกว่า 0";
        return;
    }

    // พื้นที่ของวงกลม = πr²
    let area = Math.PI * Math.pow(radius, 2);
    alert("พื้นที่ของวงกลมคือ: " + area.toFixed(2) + " ตารางหน่วย")
}