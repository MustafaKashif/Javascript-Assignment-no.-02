// Changing Case

// Question No. 01

// var input = prompt("Enter any sentence that you want : ");
// var capital = input.toUpperCase();
// document.write(capital);

// Question No. 02

// var input = prompt("Enter any sentence that you want : ");
// var capital = input.toLowerCase();
// document.write(capital);

// Strings

// Question No. 03

// var input = prompt("Enter your favourite Mobile phone Model : ");
// var len = input.length;
// document.write("The Length of the input is : "+len);

// Question No. 04

// var input = prompt("Enter any sentence : ");
// var slice = input.slice(-1);
// document.write("The last Character that you have entered is : "+slice);

// Strings Finding segments

// Question No. 05

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("The index of word n is : "+index);

// Question No. 06

// var input = prompt("Enter the name that you want to enter : ");
// for(var i = 0; i <= input.length; i++){
//     var text = input.slice(i, i+1)
//         if(text == "@" || text == "." || text == "!"){
//             alert("Please enter a valid username ! ");
//        }    
// }

// Question No. 07

// var st = "The quick brown fox jumps over the lazy dog";
// var string = st.toLowerCase();
// var count = string.split("the").length-1;
// alert(count);   

// Strings Finding Characters

// Question No. 08

// var word = "Pakistani";
// var index = word.charAt(3);
// document.write("The character at index 3 is : "+index);

// String Replacing Characters

// Question No. 09

// var name = "Hyderabad";
// var change = name.replace("Hyder", "Islam");
// document.write(change);

// Question No. 10

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replace(/and/g, "&");
// document.write(replace);

// Rounding Numbers

// Question No. 11

// var input = parseFloat(prompt("Enter any positive integer that you want : "));
// document.write("<br>The number that youo have entered is : "+input);
// document.write("<br>The round off of this number is : "+Math.round(input));
// document.write("<br>The floor of this number is : "+Math.floor(input));
// document.write("<br>The ceil of this number is : "+Math.ceil(input));

// Question No. 12

// var input = parseFloat(prompt("Enter any negative integer that you want : "));
// document.write("<br>The number that youo have entered is : "+input);
// document.write("<br>The round off of this number is : "+Math.round(input));
// document.write("<br>The floor of this number is : "+Math.floor(input));
// document.write("<br>The ceil of this number is : "+Math.ceil(input));

// Generating Random numbers

// Question No. 13

// var dice = Math.floor(Math.random()*6+1);
// document.write(dice);

// Question No. 14

// var coin = Math.floor(Math.random()*2+1);
// if(coin == 1){
//     document.write("Tails ! ");
// }
// else if(coin == 2){
//     document.write("Heads !")
// }

// Question No. 15

// var input = parseInt(prompt("Enter any number you want : "));
// var secretRandomNumber = Math.floor(Math.random()* 10 + 1);
// if(input == secretRandomNumber){
//     document.write("Congratulations ! The number that you have entered is found");
// }
// else if(input != secretRandomNumber){
//     document.write("Not found ! try Again");
// }

// Converting String into numbers

// Question No. 16

// var string = "456";
// var number = parseInt(string);
// document.write("The type of value is : "+typeof(number));

// Question No. 17

// var num = 35.36;
// var string = num.toString();
// document.write("The type of value is : "+typeof(string));
// var one = string.slice(0,2);
// var two = string.slice(3,5);
// var final = one + two;
// document.write("<br>"+final);

// Controlling length of the decimals

// Question No. 18

// var percentage = 30 / 45 * 100;
// document.write(percentage.toFixed(2));

// Conerting Strings into decimals and integers

// Question No. 19
 
// var input = parseFloat(prompt("Enter your Weight : "));
// var roundoff = Math.round(input);
// document.write(roundoff);
// document.write("<br>"+roundoff+"kgs");
// document.write("<br>"+input.toFixed(1)+"kgs");
// document.write("<br>"+input.toFixed(1)+"Kilograms");

// Changing case completed 

// Chapter No. 31 - 34

// Question No. 01 

// var todayDate = new Date();
// document.write(todayDate);   

// Question No. 02

// var todayDate = new Date();
// var string = todayDate.toString();
// var month = string.slice(4, 7);
// if (month === "Jan"){
//     document.write("Current month: January")
// }else if(month === "Feb"){
//     document.write("Current month: February")
// }else if(month === "Mar"){
//     document.write("Current month: March")
// }else if(month === "Apr"){
//     document.write("Current month: April")
// }else if(month === "May"){
//     document.write("Current month: May")
// }else if(month === "Jun"){
//     document.write("Current month: June")
// }else if(month === "Jul"){
//     document.write("Current month: July")
// }else if(month === "Aug"){
//     document.write("Current month: August")
// }else if(month === "Sep"){
//     document.write("Current month: September")
// }else if(month === "Oct"){
//     document.write("Current month: October")
// }else if(month === "Nov"){
//     document.write("Current month: November")
// }else if(month === "Dec"){
//     document.write("Current month: December")
// }

// Question No. 03

// var todayDate = new Date();
// var string = todayDate.toString();
// var day = string.slice(0, 3);
// document.write("Today is : "+day);

// Question No. 04

// var day = todayDate.getDay();
// if(day == 0 || day == 6){
//     document.write("It's Funday");
// }

// Question No. 05

// var days = todayDate.getDay();
// if(days > 0 || days <= 15){
//       document.write("First fifteen days of the month");
// }
// else if(days > 15 || days <= 30){
//       document.write("Last days of the month");
// }

// Question No. 06

// var todayDate = new Date();
// document.write(todayDate);
// document.write("<br>");
// var millisecondToday = todayDate.getTime();
// var minutes = millisecondToday / 60000;
// document.write("<br>");
// document.write("Elapsed Milliseconds from Jan 1 , 1970 : "+millisecondToday);
// document.write("<br>");
// document.write("Elapsed minutes from Jan 1, 1970 : "+minutes);

// Question No. 07

// var todayDate = new Date();
// var today = todayDate.toString();
// var time = today.slice(12, 14);
// if(time >= "00" || time <= "12"){
//     document.write("It's AM");
// }
// else if(time >= "13" || time <= "24"){
//     document.write("It's PM");
// }

// Question No. 08

// var laterDate = new Date();
// var later = laterDate.setDate("00");
// var later = laterDate.setMonth("11");
// var later = laterDate.setFullYear("2020");
// var later = laterDate.setHours("00");
// var later = laterDate.setMinutes("00");
// var later = laterDate.setSeconds("00");
// document.write(laterDate);

// Question N0. 09

// var todayDate = new Date();
// var d = todayDate.setDate("16");
// var m = todayDate.setMonth("08");
// var thatDay = new Date();
// var da = thatDay.setDate("18");
// var mo = thatDay.setMonth("05");
// var ye = thatDay.setFullYear("2015");
// var td = todayDate.getTime();
// var thd = thatDay.getTime();
// var difference = Math.floor((td - thd)/(1000 * 60 * 60 * 24)); 
// document.write(difference+" "+"Days passed since 1st Ramadan 2015");

// Question No. 10

// var todayDate = new Date();
// var dateO = todayDate.setDate("01");
// var yearO = todayDate.setFullYear("2022");
// var monthO = todayDate.setMonth("00");
// var thatDay = new Date();
// var secondsToday = todayDate.getTime();
// var secondsThatDay = thatDay.getTime();
// var result = (secondsThatDay - secondsToday)/1000;
// document.write(result+" "+"Seconds have passed since 2022 starts");

// Question No. 11

// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setHours("10");
// document.write("<br>1 Hours ago on this same day : "+laterDay);

// Question No. 12

// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setFullYear("1922");
// document.write("<br>100 years ago on this same day : "+laterDay);

// Question No. 13

// var input = parseInt(prompt("Enter your Age : "));
// var currentYear = 2022;
// var YearOfBirth = currentYear - input;
// document.write("Your birth year is : "+YearOfBirth);

// Question No. 14

// var customerName = prompt("Enter your Name : ");
// var monthName = prompt("Enter the Name of the month : ");
// var numberOfUnits = parseFloat(prompt("Enter the number of units : "));
// var chargePerUnit = parseFloat(prompt("Enter the Charge per unit : "));
// var latePaymentCharge = parseFloat(prompt("Enter the late payment Charge : "));
// var netAmount = numberOfUnits * chargePerUnit;
// var grossAmount = netAmount + latePaymentCharge;
// document.write("<br><b>K-Electric Bill</b>");
// document.write("<br>Customer Name : "+customerName);
// document.write("<br>Name of the Month : "+monthName);
// document.write("<br>Number of Units : "+numberOfUnits.toFixed(2));
// document.write("<br>Charges per unit : "+chargePerUnit.toFixed(2));
// document.write("<br>Net Amount Payabale (Within due Date): "+netAmount.toFixed(2));
// document.write("<br>Late Payment Charges : "+latePaymentCharge.toFixed(2));
// document.write("<br>Gross amount Payable (After Due Date):"+grossAmount.toFixed(2));

// Chapter No. 31-34 Completed 

// Chapter No. 35 - 38

// Question No. 01

// function dateAndTime(){
//     var todayDate = new Date();
//     document.write(todayDate);
// }
// dateAndTime();

// Question No. 02

// var firstName = prompt("Enter your First name : ");
// var lastName = prompt("Enter your last name : ");
// function greet(){
//     document.write("Hello ! "+" "+firstName +" "+lastName +" "+"Welcome to my website");
// }
// greet();

// Question No. 03

// var numberOne = parseInt(prompt("Enter the First number : "));
// var numberTwo = parseInt(prompt("Enter the Second number :"));
// function sum(){
//     var sum = numberOne + numberTwo;
//     return sum;
// }
// var sumTogether = sum();
// document.write(sumTogether);

// Question No. 04

// var number1 = +prompt("Enter the first Number : ");
// var number2 = +prompt("Enter the second number : ");
// var sign = prompt("Enter the sign that you want to operate on to get your desired output : ");
// function calculator(){
//    if(sign == "+"){
//     alert(number1 + number2);
// }
// else if(sign == "-"){
//     alert(number1 - number2)
// }
// else if(sign == "*"){
//     alert(number1 * number2);
// }
// else if(sign == "/"){
//     alert(number1 / number2);
// }
// else if(sign == "%"){
//     alert(number1 % number2);
// }
// else{
//     alert("Wrong sign entered");
// }
//  }
// calculator();

// Question No. 05

// var input = parseInt(prompt("Enter the number that you want : "));
// function squareNumber(){
//     var square = input * input;
//     document.write("The Square of the Entered number is : "+square);
// }
// squareNumber();

// Question No. 06

// var input = parseInt(prompt("Enter the number that you want the factorial of : "));
// function factorial(){
//     var f = 1;
//     for(var i = input; i >= 1; i--){
//         f = f * i;
//     }
// document.write("The factorial of"+" "+input+" "+"is : "+" "+f);
// }
// factorial();

// Question No. 07

// var startingNumber = parseInt(prompt("Enter the Starting Number : "));
// var endingNumber = parseInt(prompt("Enter the ending number : "));

// function counting(){
//     for(var i = startingNumber; i <= endingNumber; i++){
//     document.write(i+" ");
//     }   
// }
// counting();

// Question No. 08

// var base = parseInt(prompt("Enter the base : "));
// var perpendicular = parseInt(prompt("Enter the perpendicular : "));
// function hypotenuse(){
//     function square(){
//         var baseSquare = base * base;
//         var perpendicularSquare = perpendicular * perpendicular;
//         var sum = baseSquare + perpendicularSquare;
//         return sum;
//     }
// var baseAndPerpenicular = square();
//         var hypotenuse = baseAndPerpenicular;
//         var answer = Math.sqrt(hypotenuse);
//         document.write("The Hypotenuse is : "+" "+answer);
// }
// hypotenuse();

// Question no. 09

// function areaOfRectangle(width, height){
//     var a  = width * height;
//     document.write("The Area of rectangle is : "+a);
// }
// areaOfRectangle(10, 20);

// using prompt / input

// var width = parseInt(prompt("Enter the width of the rectangle : "));
// var height = parseInt(prompt("Enter the height of the rectangle : ")); 
// function areaOfRectangle(){
//     var a  = width * height;
//     document.write("The Area of rectangle is : "+a);
// }
// areaOfRectangle();

// Question No. 10

// var input = prompt("Enter the string that you want to check : ");
// input = input.toLowerCase();
// function checkPalindrome(){
//     var mustafa = input.split("");
//     var kashif = mustafa.reverse("");
//     var join = kashif.join("");
//     if(input == join){
//         document.write("The word "+" "+input+" "+"is palindrome");
//     }
//     else{
//         document.write("The word"+" "+input+" "+"is not a palindrome");
//     }
// }
// checkPalindrome();

// Question No. 11

// var inputString = prompt("Enter any String that you want to capitalize : ");
// function stringCapitalize(){
//     var stringSplit = inputString.split(" ");
    
//     for (let i = 0; i < stringSplit.length; i++) {
//         stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].substr(1);
//     }
//     stringSplit.join(" ");
//     var string = stringSplit.toString();
//     var repl = string.replace(/,/g," ");
//     document.write(repl)
// }
// stringCapitalize();

// Question No. 13

// var string = prompt("Enter any sentence that you want to enter : ");
// var findOut = prompt("Enter any chracter that you want to find out from your entered string : ");
// function findingStrings(){
//     var st = string.toLowerCase();
//     var find = findOut.toLowerCase();
//     var count = st.split(find).length-1;
//     document.write("The letter"+" "+findOut+" "+"appears"+" "+count+" "+"times in the given array");   
// }
// findingStrings();

// Question No. 14

// var radius = parseInt(prompt("Enter the radius of the circle : "));
// function calCircumference(){
//       var circumference = 2 * 3.142 * radius;
//       document.write("The circumference of circle is : "+circumference);
// }
// function calArea(){
//      var area = 3.142 * (radius * radius);
//      document.write("The Area of the circle is : "+area);
// }
// calCircumference();
// document.write("<br>");
// calArea();

// Chapter No. 35 - 38 Completed

// Chapter No. 38-42

// Question No. 01

// var a = parseInt(prompt("Enter the base number : "));
// var b = parseInt(prompt("Enter the power/exponent : "));
// function power(){
//   var power = Math.pow(a, b);
//   document.write("The answer is : "+power);
// }
// power();

// Question No. 02

// var year = parseInt(prompt("Enter the year that you want to check : "));
// function leapYear(){
//     if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) )
//     {
//         document.write(year+" is a leap year");  
//     }
//     else
//     {
//         document.write(year+" is not a leap year");  
//     }
// }
// leapYear();

// Question No. 03

// var a = Number(prompt("Enter the first side of the triangle : "));
// var b = Number(prompt("Enter the second side of the triangle : "));
// var c = Number(prompt("Enter the third side of the triangle : "));
// function calS(){
//     var cal = (a + b + c)/2;
//     return cal;
// }
// var s = calS();
// document.write("The value of s is : "+s);
// function calArea(){
//    var area =  s*(s - a)*(s - b)*(s - c);
//    document.write("The area of triangle is : "+area);
// }
// document.write("<br>")
// calArea();

// Question No. 04

// var subjectOne = parseInt(prompt("Enter the marks of subject One : "));
// var subjectTwo = parseInt(prompt("Enter the marks of subject Two : "));
// var subjectThree = parseInt(prompt("Enter the marks of subject Three : "));
// function main(){
//     function average(){
//         var av = (subjectOne + subjectTwo + subjectThree)/3;
//         document.write("The average is : "+av);
//     }
//     average();
//     document.write("<br>");
//     function percentage(){
//         var per = (subjectOne + subjectTwo + subjectThree)*100/300;
//         document.write("The percentage is : "+per);
//     } 
//     percentage();
// }
// main();

// Question No. 05

//  var string = "My name is Mustafa kashif. I am currently pursuing my degree of Software engineering."
//  string = string.toLowerCase();
//  function indexOf(findOut){
//     document.write(findOut+" "+"is available at index : "+string.indexOf(findOut));
//  }
//  indexOf("software");

// Question No. 06

// var string = "Mustafa Kashif mehmood";
// function deleteVowel(){
//    var del = string.replace(/[aeiou]/g, "");
//    document.write("String without vowel is : "+del); 
// }
// deleteVowel();

// Question No. 08

// var distanceInKm = parseInt(prompt("Enter the distance in kilometeres : "));
// function meter(){
//     var dm = distanceInKm * 1000;
//     document.write("The distance in meters is : "+dm+" "+"meters");
// }
// function feet(){
//     var df = distanceInKm * 3280.84;
//     document.write("The distance in feet is : "+df+" "+"feet");
// }
// function inches(){
//     var di = distanceInKm * 39370.1;
//     document.write("The distance in inches is : "+di+" "+"inches");
// }
// function centiMeters(){
//     var dcm = distanceInKm * 100000;
//     document.write("The distance in centimeters is : "+dcm+" "+"Centimeters");
// }
// meter();
// document.write("<br>");
// feet();
// document.write("<br>");
// inches();
// document.write("<br>");
// centiMeters();
// document.write("<br>");

// Question No. 09

// function overTime(workTime){
//     if(workTime == 40){
//         document.write("No overtime done ! Hence no extra payment");
//     }
//     else if(workTime > 40){
//        var hours = (workTime - 40) * 12;
//        document.write("This employee worked for extra"+" "+(workTime - 40)+" "+"Hours");
//        document.write("<br>The overtime payment is : "+hours+" "+"Rupees");
       
//     }
// }
// overTime(50);
// document.write("<br>");
// overTime(40);

// Question No. 10

// var input = Number(prompt("Enter the Amount to with draw !! "));
// var amount = input.toString();
// function withDrawl(){
//    var hundred = amount.slice(0,1);
//    var fifty = amount.slice(1,2);
//    var tens = amount.slice(2,3);
//    document.write("You will have "+" "+hundred+" "+"hundred notes"+" "+fifty+" "+"fifty notes"+" "+tens+" "+"ten notes");
// }
// withDrawl();

// Chapter No. 38 - 42 completed