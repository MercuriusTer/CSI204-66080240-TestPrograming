function checkAge() {
    let age = document.getElementById("age").value;

    if (age === "" || age < 0) {
        alert("กรุณากรอกอายุที่ถูกต้อง!")
        return;
    }

    if (age < 13) {
        alert("คุณเป็นเด็ก")
    } else if (age >= 13 && age <= 19) {
        alert("คุณเป็นวัยรุ่น")
    } else if (age >= 20 && age < 123) {
        alert("คุณเป็นผู้ใหญ่")
    }
    else {
        alert("คุณยังมีชีวิตอีกหรอ!? คุณอายุมากกว่า ฌาน กาลม็อง ซะอีก ถือว่าทำลายสถิติโลกได้เลยเด้อ!")
    }
}

function checkEvenOdd() {
    let number = document.getElementById("number").value;

    if (number === "") {
       alert("กรุณากรอกตัวเลข!");
        return;
    }

    if (number % 2 === 0) {
        alert("เลขนี้เป็น 'เลขคู่'");
    } else {
        alert("เลขนี้เป็น 'เลขคี่'");
    }
}