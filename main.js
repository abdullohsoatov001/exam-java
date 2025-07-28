// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini
// let xax = alert("5ni 2 ga bolamiz")
// let bab = 5 % 2
// let pp = alert(`${bab}`)





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let random = Math.random()
// let ran = Math.floor(random * 10) + 1
// alert(`${ran}`)


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let mm = Math.floor(12.510)
// console.log(mm);





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// let zz = ["MARS IT SCHOOL"]
// for (let i = 0; i < zz.length; i++) {
//     console.log(zz[i].length);

// }   



// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering
// let array = ["MARS IT SCHOOL"]
// let sum = []
// for (let i = 0; i < array.length; i++) {

// }


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering
// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
// console.log(harflar[0] + harflar[1] + harflar[2] + harflar[19] + harflar[10] + harflar[10] + harflar[13] + harflar[21]);





// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering
// let z1 = "Siz balag'ot yoshiga yetgansiz"
// let z2 = "siz balog'at yoshiga yetmagansiz"
// let z3 = " balog'at yosh muborak"
// let yosh = prompt("yoshingizni kiriting")
// if (yosh < 18) {
//     console.log(z1);

// }
// else if (yosh > 18) {
//     console.log(x2);

// }
// else {
//     console.log(z3);

// }




// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let pp = prompt("Введите ваше имя:");
// if (pp) {
//     let revers = pp.split("").reverse().join("");
//     console.log(revers);
// } else {
//     console.log("Имя nвведи .");
// }

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering
// let ismyosh = prompt('isminigizni kiriting')
// let ismyosh2 = prompt('yoshingizni kiriting')
// let cc = document.createElement("h1")
// cc.innerHTML = `${ismyosh}`
// let body = document.querySelector("body")
// let nn = document.createElement("h1")
// nn.innerHTML = `${ismyosh2}`
// nn.style.color = "blue"
// cc.style.color = "blue"
// body.prepend(cc, nn)









// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let juft = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        juft.push(arr[i]);
    }
}

console.log(juft);
