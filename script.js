
'use strict';

let arr = ['654545646', '274654646', '75645644555', '1564654', '354564546', '75465465465', '37457']; 
arr.forEach((item) => {
  if (item.startsWith('3') || item.startsWith('7')){
    console.log(item);
  }
});


let num = 100;
nextNum:
for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
    continue nextNum;
  } 
  }
 console.log('Простое число: ' + i + ', первый делитель 1,' +' второй делитель: ' + i); 
}