console.log("Hello World!\n==========\n");

// Exercise 1 Section

// for (let i = 1; i <= 99; i += 2) {
//    console.log(i); 
// } 

// Exercise 2 Section

// for (let a = 1; a <= 100; a ++) {
// if (a % 3 == 0 && a % 5 == 0) {
//    console.log(a, "FIZZBUZZ")
// } else
// if (a % 3 == 0) {
//   console.log(a, "FIZZ");
// } else
// if (a % 5 == 0) {
//    console.log(a, "BUZZ");
// } else { console.log(a)
// }
// }

// Exercise 3 Section

// let x = 1;

// while (x <= 100) {
//    let output = "";

// if (x % 3 == 0) {
//    output += "FIZZ";
// }

// if (x % 5 == 0) {
//    output += "BUZZ";
// }

// console.log(`${x} ${output}`);

// x ++
// }

// let x = 1;

// do {
//    let output = "";

//   if (x % 3 == 0) {
//        output += "FIZZ";
//    }

//    if (x % 5 == 0) {
//        output += "BUZZ";
//    }
//   console.log(`${x} ${output}`);

//    x++;
// } while (x <= 100);


// Exercise 4 Section


// let foundValue = Math.round(Math.random() * 500); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// for (let i = 1; i <= n; i ++) {
//    if (i == foundValue) {
//        console.log(`Found ${foundValue}!`);
//    break
// }
// if (i == n) {
//    console.log(`Did not find ${foundValue} within 1-${n}..`)
// }
// }

// Exercise 5 Section

// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let end = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);

// for (let i = start; i <= end; i ++) {
//    let output = "";

//    if (i % fizzDivisor == 0) {
//        output += "FIZZ";
//    }

//    if (i % buzzDivisor == 0) {
//        output += "BUZZ";
//    }
    
//    console.log(`${i} ${output}`)
// }

// console.log(fizzDivisor, buzzDivisor)


