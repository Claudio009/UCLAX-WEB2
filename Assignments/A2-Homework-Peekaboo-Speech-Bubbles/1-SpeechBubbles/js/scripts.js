/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log("This is a test");

window.onload = function() {
var features = document.querySelectorAll('div.feature');
var bubbles = document.querySelectorAll('img.bubble');

console.log(bubbles);
console.log(bubbles[0]);
console.log(bubbles[1]);
console.log(bubbles[2]);

/*-------------------------------------
| bubble 1
-------------------------------------*/
/*mouseover -------------------------------*/
features[0].addEventListener('mouseover', function(){
  console.log('ouch you mouseover me.');
  console.log(bubbles[0]);
  bubbles[0].classList.add('on');
});
/*mouseout -------------------------------*/
features[0].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  console.log(bubbles[0]);
  bubbles[0].classList.remove('on');
});

/*-------------------------------------
| bubble 2
-------------------------------------*/
/*mouseover -------------------------------*/
features[1].addEventListener('mouseover', function(){
  console.log('ouch you mouseover me.');
  console.log(bubbles[0]);
  bubbles[1].classList.add('on');
});
/*mouseout -------------------------------*/
features[1].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  console.log(bubbles[0]);
  bubbles[1].classList.remove('on');
});

/*-------------------------------------
| bubble 3
-------------------------------------*/
/*mouseover -------------------------------*/
features[2].addEventListener('mouseover', function(){
  console.log('ouch you mouseover me.');
  console.log(bubbles[0]);
  bubbles[2].classList.add('on');
});
/*mouseout -------------------------------*/
features[2].addEventListener('mouseout', function(){
  console.log('ouch you mouseoutted me.');
  console.log(bubbles[0]);
  bubbles[2].classList.remove('on');
});

}; /* this is the end -------------------------------*/
