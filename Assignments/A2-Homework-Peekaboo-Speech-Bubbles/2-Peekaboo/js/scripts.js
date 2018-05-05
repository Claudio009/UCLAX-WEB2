/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log("This is a test");

window.onload = function() {

var items = document.querySelectorAll('.item');
var texts = document.querySelectorAll('.text');
console.log(texts);
console.log(texts[0]);
console.log(texts[1]);
console.log(texts[2]);

var descs = document.querySelectorAll('.desc');

console.log(descs);
console.log(descs[0]);
console.log(descs[1]);
console.log(descs[2]);

/*-------------------------------------
| animal-1
-------------------------------------*/
/* mouseover  -------------------------------*/
items[0].addEventListener('mouseover', function(){
  console.log('ouch you clicked me.');
  texts[0].classList.add('on');
  descs[0].classList.add('on');
  });
/* mouseout  -------------------------------*/
items[0].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  texts[0].classList.remove('on');
  descs[0].classList.remove('on');
  });

  /*-------------------------------------
  | animal-2
  -------------------------------------*/
  /* mouseover  -------------------------------*/
  items[1].addEventListener('mouseover', function(){
    console.log('ouch you clicked me.');
    texts[1].classList.add('on');
    descs[1].classList.add('on');
    });
  /* mouseout  -------------------------------*/
  items[1].addEventListener('mouseout', function(){
    console.log('ouch you mouseoutted me.');
    texts[1].classList.remove('on');
    descs[1].classList.remove('on');
    });

/*-------------------------------------
| animal-3
-------------------------------------*/
/* mouseover  -------------------------------*/
items[2].addEventListener('mouseover', function(){
  console.log('ouch you clicked me.');
  texts[2].classList.add('on');
  descs[2].classList.add('on');
      });
/* mouseout  -------------------------------*/
items[2].addEventListener('mouseout', function(){
 console.log('ouch you mouseoutted me.');
 texts[2].classList.remove('on');
 descs[2].classList.remove('on');
});

/*-------------------------------------
| animal-4
-------------------------------------*/
/* mouseover  -------------------------------*/
items[3].addEventListener('mouseover', function(){
  console.log('ouch you clicked me.');
  texts[3].classList.add('on');
  descs[3].classList.add('on');
});
/* mouseout  -------------------------------*/
items[3].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  texts[3].classList.remove('on');
  descs[3].classList.remove('on');
});

/*-------------------------------------
| animal-5
-------------------------------------*/
/* mouseover  -------------------------------*/
items[4].addEventListener('mouseover', function(){
  console.log('ouch you clicked me.');
  texts[4].classList.add('on');
  descs[4].classList.add('on');
});
/* mouseout  -------------------------------*/
items[4].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  texts[4].classList.remove('on');
  descs[4].classList.remove('on');
});

/*-------------------------------------
| animal-6
-------------------------------------*/
/* mouseover  -------------------------------*/
items[5].addEventListener('mouseover', function(){
  console.log('ouch you clicked me.');
  texts[5].classList.add('on');
  descs[5].classList.add('on');
});
/* mouseout  -------------------------------*/
items[5].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  texts[5].classList.remove('on');
  descs[5].classList.remove('on');
});





}; /* this is the end -------------------------------*/
