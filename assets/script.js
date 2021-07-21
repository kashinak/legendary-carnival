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
//2. Make the flipping work
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

