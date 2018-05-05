var boxes = document.querySelectorAll('.solution div');

console.log('boxes', boxes[0]);
console.log('boxes', boxes[1]);
console.log('boxes', boxes[2]);
console.log('boxes', boxes[3]);
console.log('boxes', boxes[4]);
console.log('boxes', boxes[5]);

boxes[0].addEventListener('click', function(){
   console.log('you move me!');
   boxes[0].classList.add('on');
});

boxes[1].addEventListener('click', function(){
   console.log('you move me!');
   boxes[1].classList.add('on');
});

boxes[2].addEventListener('click', function(){
   console.log('you move me!');
   boxes[2].classList.add('on');
});

boxes[3].addEventListener('click', function(){
   console.log('you move me!');
   boxes[3].classList.add('on');
});

boxes[4].addEventListener('click', function(){
   console.log('you move me!');
   boxes[4].classList.add('on');
});

boxes[5].addEventListener('click', function(){
   console.log('you move me!');
   boxes[5].classList.add('on');
});

boxes[6].addEventListener('click', function(){
   console.log('you move me!');
   boxes[6].classList.add('on');
});
