// Write your code below this line.

const luckyNumbers = n => {
    let numsArr = []
    for (let i = 0; i < n; i++) {
        numsArr.push(Math.floor(Math.random() * 10) + 1)
    } return numsArr
}

console.log(luckyNumbers(5))
