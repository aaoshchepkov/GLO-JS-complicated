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