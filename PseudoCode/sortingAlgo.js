let numbers = [];

function generateArray() {
    numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
    document.getElementById("arrayResult").innerText = numbers.join(", ");
    document.getElementById("sortedArray").innerText = "";
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}


function sortArray(type) {
    if (numbers.length === 0) {
        alert("กรุณาสุ่มตัวเลขก่อน!");
        return;
    }

    let sortedNumbers = [...numbers];

    if (type === "bubble") {
        console.time("Bubble Sort Time");
        bubbleSort(sortedNumbers);
        console.timeEnd("Bubble Sort Time");
    } else if (type === "selection") {
        console.time("Selection Sort Time");
        selectionSort(sortedNumbers);
        console.timeEnd("Selection Sort Time");
    }

    document.getElementById("sortedArray").innerText = sortedNumbers.join(", ");
}