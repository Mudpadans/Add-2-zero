// Starting array
let array = [28, 43, 12, 30, 4, 0, 12]

// Write your solution below:
let answer = false;
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                //console.log(true)
                answer = true;
                //return answer
            } 
        }
    }
}

addToZero(array);
console.log(answer);