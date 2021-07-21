//1. Create and assign GLOBAL variables & retrieve the necessary HTML elements based on their ids.

//0 stands for card not flipped - so 20 0 for 20 cards not flipped
var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]; 

/*we need an imgRec array that is going to keep track of what 
cards are loaded and what are not yet for randomization*/
var imgRec = [];
/*need rand variable to keep track of random numbers and use it to 
randomly generate numbers to retrieve images randomly from*/
var rand;
/*you need to create all your variables before hand so you can use them before*/

/*going to keep track of the number of cards that were flipped - 
so when one card is flipped the index will increment by 1 and when the other card 
is flipped then flipIndex will increment to 2, then after it increments to 2 then 
it will compare the two cards to see if they are equal. If they are equal then 
they will remain flipped; they won't flip back.
then it will flip back to index 0 */
var flipIndex = 0; 

/*to compare two cards to see if they are equal. as we flip cards, we will 
load the img tag src value. by the time it is loaded with tow img tag values,
the flipIndex index will be 2. If both values/img tags strings are equal then,
we use the cardTextRec variable to calculate.*/
var cardTextRec = ["<img>...","<img>..."]; 
/*unlike, cardTextRec which will store img tags as strings, the cardRec will 
store the id of the two cards. later we will use this to track what images were 
inside each card id and so forth. when cardRec has two string ids in its array,
then flipIndex = 2 then it will fill up cardTextRec = [] and compare the two 
cards to see if they are equal. */
var cardRec = ["card1", "card4"];
/*it will find the element with id card1 then 
back1 then <img src="assets/images/img1.png" alt="". it will compare 
innerHtml for both back1 and back4>*/
var cardTextRec = ['<img src="assets/images/img1.png" alt=""></img>', '<img src="assets/images/img2.png" alt="">'];
/* It will come out unequal so all variables will be reset*/
var flipIndex = 0;
var cardTextRec = [];
var cardRec = [];
/* that's the card game and we are alos going to need a variable to store the number; 
so for example card3 or back3, 3 would be stored in cardNum variable*/
var cardNum;
/* these variables are dynamically going to contain front and back ids and with 
those two elements we can do the front back flipping*/
var front;
var back;
/* allows the user to only flip two cards at a time. It will check if two cards are 
flipped and once they are both flipped they will flip back */
var cardChk = 0;
//keep track of the score
var correct = 0;

/*We neded to retrieve game div area. we are going to use 
this entire game element to see if someone clicks on it*/
var memory = document.getElementById("game");
/* we also need to retrieve the timer, score and new game button*/
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var newGame = document.getElementById("new");
/*Next we need to retrieve the result, opacityD div*/
var result = document.getElementById('result');
var opacityD = document.getElementById('opacityD');
/*since h1Res and pREs both have to be changed then we need to retrieve those as well*/
var h1Res = document.getElementById('h1Res');
var pRes = document.getElementById('pRes');
/* we need to create a status variable and it's going to be assigned to 0 and it will 
keep track of the uniqueness of the random number. so when it is 0 that means a unique
number has not been generated yet. so every time a random number is generated in the 'rand' 
value it needs to be unique that way there will not be any repitition, it will make sure 
that the image that is retrieved is unique*/
var status = 0;
/* another array countDown will keep track of the count down timer. we are going to 
create a set value of JavaScript predefined function that is going to set the timer
and we are going to keep track of that timer with the countDown values; you'll see 
how that works when we get through it*/
var countDown;
/* We are alos going to create a varibale that is changeable.  game begins at 60 seconds
and counts down from there */
var secsInput = 60;
/* once I create a static value of secsInput = 60, that can't be changed, I can 
apply the secsInput value for the countdown from 60sec, 59sec, 58sec... */
var seconds = secsInput;
/* to keep track of if the game is over or not I will create a varibale gameOver 
and give it a default value of 'false'. If the game is over I won;t be able
click on any of the tiles; game is over; click on the new game button to start a 
new game. gameOver will be 'true' when the timer runs out and the user has 
scored a perfect 10  */
var gameOver = false;

//2. Make the flipping work

/* need to add an event listener and find out what element was flipped. 
Instead of adding an event listener to each of the 20 cards, I am going to add 
an event listener to the 'game' div that no matter where in that area is clicked,
the assigned function will run. use memory variable already retrieved, add event 
listener, add "click" event and function with 'e'(event object)in function 
parenthesis. 'function' is anonomous because it doesn't have a name, it 
doesn't have a function call because it doesn't need one since when the click 
event happens on the memory, the function will run*. 'e' can be any word you want
but whatever is inside those parenthesis is called an 'event object' */
memory.addEventListener("click", function(e) {
    /*event object - information about the event;
    for example what exact element was clicked,
    id of that element, when the event happened. 
    once we find the target element that was clicked on, 
    we can find the parent of that element, 
    parent of that parent's id. This is what the 'e' 
    element is going to help us do. we are going to create a 
    variable called 'el' which is going to contain the 
    parent element of the target. so we are going to call the event object 'e'
    and find the target that was clicked and then find the aprent 
    element of that target element*/
    var el = e.target.parentElement
    /* let's first retrieve the id */
    var numId = el.id;
});


/*3. Basic game - no randomization, no timer, just flipping, comparing 
and alert box for result. so have the game working without all 
of the fancy things.*/
/*4. make the new game button work.//give information to tell 
the browser when the new game button is pressed the browser refreshes page.*/
/*5. Randomize the game boxes on loading - also create images.js file here. 
We are going to create an array file that holds all the images and a link to it
in our script.js*/
//6. Create timer
/*7. make the fancy display fo results - we normally use alert box but 
we don't want that we want a fancy popup that we create.
That's it 7 parts for our code.*/

