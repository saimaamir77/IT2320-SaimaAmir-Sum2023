//////////////////////
// Global Variables //
//////////////////////

//var Books=JSON.parse(data)
var Books = 

[{"title" : "Corduroy", "author" : "Don Freeman", "publisher": " Viking Books", "year": "1968", 
"jacketColor" : " firebrick"},

{"title" : " Habitat", "author" : "Greg Vomen", "publisher": "Oxford Books", "year": "1998", 
"jacketColor" : " blue"},

{"title" : "History of Cleveland", "author" : "McCarthy Shawn", "publisher": "Hintintun Books", "year": "1978", 
"jacketColor" : "Tomato"},

{"title" : "JavaSript", "author" : "Johas Hue", "publisher": "Oxford Books", "year": "1998", 
"jacketColor" : "Mediumseagreen"}];
//var obj=JSON.parse(JSON)



  
///////////////
// Functions //
///////////////

// Write your function(s) here
function displayBook({title, author, publisher, year, jacketColor})
  { 
   $("#bookTitle").text( title );
   $("#bookAuthor").text( author );
   $("#bookPublisher").text ( publisher );
   $("#bookYear").text( year );
   $("#bookDisplay").css("backgroundColor",  jacketColor);


   
}     



