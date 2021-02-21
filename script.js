'use strict';

let lesson4 = function (a) {
  if (typeof a !== 'string') {
    alert('Введите строку');
  } else if(a = a.trim(), a.length >= 30) {
    a = a.trim();
    a = a.split('');
    a = a.slice(0, 30);
    a = a.join('') + '...';
  } else {
    a = a.trim();
  }
  return a;
};


console.log(lesson4('                       fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'));
