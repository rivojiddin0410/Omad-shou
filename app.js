console.log("JS is started");

function add(a) {
    switch (a) {
        case 1:
            return "bir "//return funkda  ishlaydi
        // break; return bo'lsa break kerak emas    
        case 2:
            return "ikki"
        // break;
        default:
            return "boshqa son "
    }
}
// console.log(add(1));
// console.log(add(2));
// console.log(add(3));

let kun = 1

// switch (kun) {
//     case 1:
//         console.log("Monday");
//         break
//     default:
//         console.log("not day");
// }

let word = "salom"
switch (word) {
    case "xayir":
        console.log("bye");
        break
    case "salom":
        console.log("hello");
        break
    default:
        console.log("not word");
}
if (word === 'salom') console.log("hello");
else if (word === 'xayir') console.log("bye");
else console.log("not word");


//Math module

let son = 9.5

console.log( son );
// round - matematika yaxlittlassh
console.log( Math.round(son));
// floor - pastga (kichik songa) yaxlitlash
console.log( Math.floor(6.9));
