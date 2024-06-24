console.log("Hello world");

// Using conditional statements, :check if the number is: - Even or Odd.

var num1: number = 8;
if(num1%2==0){
    console.log("even");
}
else if(num1%2==0){
    console.log("odd");
}

//Using conditional statements, check if the number is: - Positive, Negative, or Zero.

var num2: number = 10;
if(num2>0){
    console.log("positive");
}
else if(num2<0){
    console.log("negetive");
}
else if(num2==0){
    console.log("zero");
}

//Using conditional statements, check if the number is:
//Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

var num3: number = 14;
if(num3 %2==0 && num3 %3==0){
console.log("this number is divisible by both 2 and 3");
}
else if(num3 %2==0 ){
    console.log("this number is divisible by 2 not by 3");
}
else if( num3 % 3==0){
    console.log("this number is divisible 3 not by 2");
}
else{
    console.log("this number is not divisible not by 2 neither 3");
}

//Q2:- Take the user age. -- If the age is 18 or above: -- Ask if they have a nationality of "Pakistani". ---If yes, print "You are eligible to vote."
    //---If no, print "Please obtain a valid ID to vote."

var userage:number = 21;
if(userage>18){
    console.log("they have a nationality of pakistani");
   console.log("you are eligible to vote.");
}
else{
    console.log("you are not eligible to vote");
}

//Q:3 write a programme that takes age of a person as input and determines whether they are a child(0-12 year) they are teenager(13-19 year) they are adults(20-59 year) or senior citizen(60 year) or above.

var age2:number = 18;
if(age2>=0 && age2<=12){
    console.log("they are  child");
}
else if(age2>=13 && age2 <=19){
    console.log("they are teenager");
}
else if(age2>=20 && age2<=59){
    console.log("they are adults");
}
else if(age2>=60){
    console.log("they are a senior citizen");
}
else{
    console.log("invalid age");
}

//Q4:- Enter a month (as a number between 1 and 12). Print the number of days in that month.

var month: number = 3;
if(month==1||month==3||month==5||month==7||month==8||month==12){
    console.log("31 days");
}
else if(month==2){
    console.log("28 days");
}
else if(month==4||month==6||month==9||month||11){
    console.log("30 days");
}
else{
    console.log("invalid");
}

//Assume a non-leap year.- Check if a year is a leap year or not.

var year: number= 2020;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}