// const findOdd = (arr) => {
//     let newArr = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = i + 1; j < arr.length; j++) {
//     //         if (arr[i] !== arr[j]) {
//     //             newArr.push(arr[j]);
//     //             return newArr
//     //         }
//     //     }
//     // }
//     let obj = {};
//     for (let i of arr) {
//         if (obj[i]) {
//             obj[i]++;
//         } else {
//             obj[i] = 1
//         }
//     }
//     for (let j in obj) {
//         let keys = Object.keys(obj);
//         if (obj[j] === 1) newArr.push(obj[j])
//     }
//     return

// }

// console.log(findOdd(['a', 'a', 'a', "d"]))


function findOddOneOut(ar, ar_size) {
    // Do XOR of all elements and return
    let res = ar[0];
    for (let i = 1; i < ar_size; i++)
        res = res ^ ar[i];

    return res;
}

// Driver code 
let ar = ["a", "a", "b", "a"];
let n = ar.length;
console.log("Odd one is "
    + findOddOneOut(ar, n));