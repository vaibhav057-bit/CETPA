// table of 3

// for(i = 1; i <= 10; i++){
//     console.log(`3 X ${i} =  ${3 * i} `);
// }

// FOR in loop

// const students = {
//     name: 'vaibhav',
//     class: 5,
//     age:20
// }
// for(let key in students){
//     console.log(`${key} => ${students[key]}`);
// }


// nested loops


const n = 8100;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += j + ' ';
    }
    console.log(str);
}