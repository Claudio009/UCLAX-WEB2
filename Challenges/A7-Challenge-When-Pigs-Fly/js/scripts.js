/*-------------------------------------
| Grab some Assets
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var TheSections = document.querySelectorAll('.tabbed section');

// console.log(tabLinks);
// console.log(sections);

/*-------------------------------------
| one function to rule all
-------------------------------------*/
//function declaration

function switchSection(whichSection){

   whichSection = whichSection -1;

   console.log(whichSection);
//hide them all
   TheSections[0].style.display = 'none';
   TheSections[1].style.display = 'none';
   TheSections[2].style.display = 'none';
   TheSections[3].style.display = 'none';

   //hide em all by defaut
   for(var i = 0; i < TheSections.length; i++){
      TheSections[i].style.display = 'none';
   }

   // show the chosen one
   TheSections[whichSection].style.display = 'block';

   //tabLinks

   tabLinks.forEach(function(theLink){
      theLink.classList.remove("chosen");
   });

   tabLinks[whichSection].classList.add("chosen");

}
//function call
switchSection(3);

/* Mange Event listeners on TanbLinks -------------------------------*/

tabLinks.forEach(function(currentLink){
    currentLink.addEventListener('click', function(event){

        event.preventDefault();

      var theSection = this.dataset.section;
      switchSection(theSection);
   });
});




/*-------------------------------------
| title
-------------------------------------*/

/*-------------------------------------
| manage Event listeners on tabLinks
-------------------------------------*/
