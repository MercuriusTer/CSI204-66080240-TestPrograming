// สร้างตัวแปรเก็บ String, Integer, Boolean
let myString = "3.14";
let myInteger = 42;
let myBoolean = true;

console.log("[Before Convert]");
console.log("My String:", myString, typeof myString);
console.log("My Integer:", myInteger, typeof myInteger);
console.log("My Boolean:", myBoolean, typeof myBoolean);

// แปลงค่าจาก String เป็น Integer, Float, Boolean
let strToInt = parseInt(myString);
let strToFloat = parseFloat(myString);

// แปลงค่าจาก Integer เป็น String
const numToStr = String(myInteger);

// แปลงค่าจาก Boolean เป็น String
const boolToStr = String(myBoolean);
const boolToInt = Number(myBoolean);

// แสดงผลการแปลงค่า
console.log("[After Convert]");
console.log("My String to Int:", strToInt, typeof strToInt);
console.log("My String to Float:", strToFloat, typeof strToFloat);
console.log("My Integer to String:", numToStr, typeof numToStr);
console.log("Boolean to String:", boolToStr, typeof boolToStr);
console.log("Boolean to Integer:", boolToInt, typeof boolToInt);