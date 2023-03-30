let n;
let arrA = [];
let arrB = [];


do {
    n = +prompt('Enter array length', '5');
} while (isNaN(n) || !n);

arrA.length = n;

toLabel:
for (i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random() * n);

    for (j = 2; j < arrA[i]; j++) {
        if (arrA[i] % j == 0) {
            continue toLabel;
        }
    }
    arrB[i] = arrA[i];
}

document.write(`2. Рандомные числа: ${arrA}`, '</br>');
arrB = arrB.filter(Boolean);
document.write(`3. Простые числа: ${arrB}`, '</br>');


minValue = maxValue = arrA[0];

for (i = 0; i < arrB.length; i++) {
    if (arrB[i] < minValue) {
        minValue = arrB[i];
    }
    else if (arrB[i] > maxValue) {
        maxValue = arrB[i];
    }
}

document.write(`Минимальное число: ${minValue}`, '</br>');
document.write(`Максимальное число: ${maxValue}`, '</br>');

