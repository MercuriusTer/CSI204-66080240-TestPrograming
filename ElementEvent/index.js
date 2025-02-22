// Change Background Color
function changeBGBlue() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

function changeBGRed() {
    document.body.style.backgroundColor = "rgb(255, 172, 172)";
}

function changeBGGreen() {
    document.body.style.backgroundColor = "rgb(180, 255, 180)";
}

function changeBGWhite() {
    document.body.style.backgroundColor = "white";
}

// Step 2 การจัดการ Event ใน JavaScript
function showMessage() {
    document.getElementById("message").innerText = "คุณกดปุ่มแล้ว!";
}

// onmouseover / onmouseout
function changeColor() {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
}
function resetColor() {
    document.getElementById("hoverBox").style.backgroundColor = "lightgray";
}

// onkeyup
function updateText() {
    let inputText = document.getElementById("textInput").value;
    document.getElementById("displayText").innerText = "คุณพิมพ์: " + inputText;
}

// addEventListener
document.getElementById("eventButton").addEventListener("click", function() {
    const colorBG = document.body.style.backgroundColor;
    if (colorBG === "rgb(255, 172, 172)") {
        changeBGBlue();
    }
    else if (colorBG === "rgb(173, 216, 230)") {
        changeBGGreen();
    }
    else if (colorBG === "rgb(180, 255, 180)") {
        changeBGWhite();
    }
    else {
        changeBGRed();
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
        alert("อีเมลต้องมี '@' และลงท้ายด้วย '.com'")
        return;
    }

    alert("ลงทะเบียนสำเร็จ! ยินดีต้อนรับ" + name);
});