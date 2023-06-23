const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let total = 0;
    for (const numbers of param) {
        total += numbers;

    }
     console.log(total / param.length);
}
average(numbers);