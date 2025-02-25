// 1. การใช้งาน List (Array)
// let myList = ["A", "B", "C"];
// console.log("รายชื่อนักเรียน:", myList);

// myList.push("D"); 
// myList.unshift("E"); 
// console.log("อัพเดตเมื่อเพิ่ม", myList);

// myList.pop(); 
// myList.shift();
// console.log("อัพเดตเมื่อลบ", myList);

// myList[1] = "F";
// console.log("อัพเดตเมื่อแก้ไข", myList);


// 2. การใช้งาน Object
let student = {
    name: "Tom",
    age: 20,
    grade: "A",
};

console.log("ข้อมูลนักเรียน:", student);
console.log("ชื่อ:", student.name);
console.log("อายุ:", student.age);
console.log("เกรด:", student.grade);

student.age = 21;
student.grade = "A+";
console.log("แก้อายุและเกรด", student);

student.subject = "Mathematics";
console.log("หลังเพิ่มวิชา:", student);

delete student.subject;
console.log("หลังลบวิชา:", student);   

// 3. สร้าง Turple และใช้ Set กำจัดค่าซ้ำ
let numbers = [1, 2, 3, 2, 4, 5, 3, 6];
let uniqueNumbers = new Set(numbers);

console.log("Turple", numbers);
console.log("Set New", uniqueNumbers);