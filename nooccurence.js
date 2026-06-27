//Learn how to count the occurrences of a specific element in an array using JavaScript. 

let arrTest = [2, 4, 5, 2, 1, 2]
arrlen = arrTest.length
//console.log(arrlen)
let count = 0

for (let i = 0; i <= arrlen - 1; i++) {
    if (arrTest[i] === 2) {
        count++
    }
}
console.log(count)