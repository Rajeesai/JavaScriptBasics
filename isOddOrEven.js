
function isOddOrEvenIfCond(n) {
    if (n % 2 == 0) {
        console.log(n + "its an Even number!")
    }
    else {
        console.log(n + " - its an Odd number!")
    }
}

function isOddOrEvenForLoop(m) {
    for (let i = 0; i <= m; i++) {
        if (i % 2 == 0) {
            console.log(i + " - this is an even no!")
        }
        else {
            console.log(i + " - this is an odd no!")
        }
    }
}

function isOddOrEvenWhileLoop(k) {
    j = 0
    while (j<=k) 
    {
       if (j % 2 == 0) {
            console.log(j + " - this is an even no!")
        }
        else {
            console.log(j + " - this is an odd no!")
        } 
        j++
    }  
    }


isOddOrEvenIfCond(7)
isOddOrEvenForLoop(10)
isOddOrEvenWhileLoop(9)