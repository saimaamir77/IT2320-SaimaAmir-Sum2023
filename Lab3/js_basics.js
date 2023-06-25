
/* ============ */
/* Examples     */
/* ============ */

function problem01()
{
   var x = 5;
   var y = 7;
   var z = x-y;
   alert("Difference is" + z);
}

function problem02()
{ var a = 7;
   var b= 5;
   var c= a/b;
   alert("division" + c);
}

function makeVariables()
{
   var spam = "Spam in a can";
   alert(spam);
}

function simpleIf()
{
   var temp = 72;

   if(temp > 85)
   {
      alert("It's hot outside!");
   }
   else if(temp > 65)
   {
      alert("It's warm outside!");
   }
   else if(temp > 50)
   {
      alert("It's cool outside!");
   }
   else
   {
      alert("It's cold outside!");
   }
}

function switchStatements()
{
   var temp = 72;

   switch(temp)
   {
      case 90:
         alert("It's hot outside!");
         break;
      case 72:
         alert("It's warm outside!");
         break;
      default:
         alert("It's some temperature outside!");
   }
}

function threeLoops()
{
   var count = 1;

   while(count <= 10)
   {
      if(count == 5)
      {
         alert("Hello! First time.");
      }
      count = count + 1;
   }

   count = 1;

   do
   {
      if(count == 5)
      {
         alert("Hello! Second time.");
      }
      count = count + 1;
   } while(count <= 10);

   for(var count = 1; count <= 10; count++)
   {
      if(count == 5)
      {
         alert("Hello! Third time.");
      }
   }
}

/* ============ */
/* Lab Problems */
/* ============ */

function problem01()

{ 
   
      var x = 5;
      var y = 7;
      var z = x-y;
      alert("Difference is" + z);
   
   //alert("Place answer to Problem #1 here");
}

function problem02()
{
   var a = 7;
   var b= 5;
   var c= a/b;
   alert("division" + c);
   //alert("Place answer to Problem #2 here");
}

function problem03()
{ var egg = 42;
   alert(" variable value "  + egg );
   //alert("Place answer to Problem #3 here");
}

function problem04()
{
   var grade = 97;

   if( grade >= 90 )
   {
   alert("display" + "A");
   }

   else if( grade >= 80)
   {
   alert(" dislay" + "B");
    }

    else if( grade >= 70 )
    { alert(" dislay" + "C");
   }

   else if( grade >= 60 )
   { alert(" dislay" + "D");
  }

  else {
   alert ("display" + "F");
  }



   //alert("Place answer to Problem #4 here");
}

function problem05(){
   for(var count = 0; count <= 100; count++)
{
      if(count == 42)
      {
         alert("42");
      }


}
}

