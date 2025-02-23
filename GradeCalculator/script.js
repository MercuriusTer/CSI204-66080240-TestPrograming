let subjects = [
    { id: "csi101", gradeId: "grade101" },
    { id: "csi102", gradeId: "grade102" },
    { id: "csi203", gradeId: "grade203" },
    { id: "csi204", gradeId: "grade204" },
    { id: "csi305", gradeId: "grade305" }
];

subjects.forEach(subject => {
    document.getElementById(subject.id).value = "";
});

function getGrade(score) {
    if (score >= 80) return "A";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "C+";
    if (score >= 60) return "C";
    if (score >= 55) return "D+";
    if (score >= 50) return "D";
    return "F";
}

function getGradePoint(score) {
    if (score >= 80) return 4.0;
    if (score >= 75) return 3.5;
    if (score >= 70) return 3.0;
    if (score >= 65) return 2.5;
    if (score >= 60) return 2.0;
    if (score >= 55) return 1.5;
    if (score >= 50) return 1.0;
    return 0.0;
}

function calculateGrade(subject) {
    let score = document.getElementById(subject).value;
    try {
        score = parseFloat(score);
        
        if (isNaN(score)) {
            document.getElementById(subject).value = "";
            document.getElementById(subjects.find(s => s.id === subject).gradeId).innerText = "-";
            alert("กรุณากรอกคะแนนให้ถูกต้อง");
            return;
        }

        if (score > 100) {
            document.getElementById(subject).value = "100";
        }

        let grade = getGrade(score);
        document.getElementById(subjects.find(s => s.id === subject).gradeId).innerText = grade;

    } catch (e) {
        console.error(e);
    }
}

function calculateGPA() {
    try{
        let totalCredits = 15; // จำนวนหน่วยกิตทั้งหมด
        let totalGradePoints = 0; // เกรดรวมในแต่ละวิชา

        subjects.forEach(subject => {
            let score = parseFloat(document.getElementById(subject.id).value);

            if (!isNaN(score)) {
                let gradePoint = getGradePoint(score);
                totalGradePoints += gradePoint * 3; // 3 คือหน่วยกิตต่อวิชา
            }
        });

        let gpa = totalGradePoints / totalCredits;
        document.getElementById("gpa-result").innerText = `GPA: ${gpa.toFixed(2)}`;
    } catch (e) {
        console.error(e);
    }
}