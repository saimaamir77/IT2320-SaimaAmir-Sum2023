//////////////////////
// Global Variables //
//////////////////////


const bookOne = {
   title: "Corduroy",
   author: "Don Freeman",
   publisher: "Viking Books",
   year: "1968",
   jacketColor: "firebrick"
}

const bookTwo = {
   title: "Habits",
   author: "Greg Vomen",
   publisher: "Oxford Books",
   year: "1998",
   jacketColor: "Blue"
}

const bookThree = {
   title: "History of Cleveland",
   author: "McCarthy Shawn",
   publisher: "Hintintun Books",
   year: "1978",
   jacketColor: "Tomato"
}
 
const bookfour = {
   title: "JavaSript",
   author: "Johas Hue",
   publisher: "Oxford Books",
   year: "1998",
   jacketColor: "Mediumseagreen"
}

  
///////////////
// Functions //
///////////////

// Write your function(s) here
function displayBook({title, author, publisher, year, jacketColor}){
   document.getElementById("bookTitle").innerText = title;
   document.getElementById("bookAuthor").innerText = author;
   document.getElementById("bookPublisher").innerText = publisher;
   document.getElementById("bookYear").innerText = year;
   document.getElementById("bookDisplay").style.backgroundColor = jacketColor;

}     



