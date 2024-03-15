// Chapter:-2----opraters and conditional staement
          /*(1) Arthimetic opraters----*/
let a=11;
let b=5;
console.log("a=",a,"& b=",b);
console.log("a+b=",a+b);  //addition 
console.log("a-b=",a-b);  //subtraction
console.log("a*b=",a*b);  //multiplication
console.log("a/b=",a/b);  //division

//modulus opraters(%)===>
console.log("a%b=",a%b);  

//Exponentiation opraters(**)===>>> which is use for power assign for any value
console.log("a**2=",a**2);

                  /*(2)Unary Opraters---*/

//Increment opraters(++)===>
a++;
console.log("a=",a);

//post increment
console.log("a++",a++);
console.log("a=",a);
        
//pre increment
console.log("++a",++a);
console.log("a=",a);

//Decrement opraters(--)===>
b--;
console.log("b=", b);


            /*(3)Assignment Opraters--*/

let c=11;
let d=5;
c += 4;          //c=c+4
console.log("c=",c);
d -= 4;          //d=d-4
console.log("d=",d);
/*just like that we can porform all opraters
 like:[=,+=,-=,*=,/=,%=,**=]*/

         /*(4) Compresion Opraters-- [==(equal to) , !=(not equalto),===(equalto with the data type),
        !==(not equalto with the data type)]*/
            //As Example:--
            let x=5;
            let y=4;
            console.log("x==y",x==y);//false
            console.log("x!=y",x!=y);//true
            console.log("x===y",x===y);//false
            console.log("x!==y",x!==y);//true
            //just like that we can use: >,>=,<,<=  
            console.log("x>y",x>y);//true
            console.log("x>=y",x>=y);//true
            console.log("x<y",x<y);//false
            console.log("x<=y",x<=y);//false


      /*(5)Logical Opraters */
// &&(logical AND), ||(Logical OR), !(Logical NOT)
let conditional1=x>4;//which is true
let conditional2=y==4;//which is true
console.log("cond1 && cond2", conditional1 && conditional2);// &&(logical AND)
console.log("x!=y || y==x",x!=y || y==x);//||(Logical OR)
console.log("x<2=",!(x<2));//!(Logical NOT)


     // Conditional Statement===>
//if statement---
let born=true;
if(born==true)
{
    console.log("you will die");
}

//if-else Statement---
let mode="dark-mode";
let color;
if(mode=="dark-mode")
{
    color="black";
}
else
{
    color="white";
}
console.log(color);

let num=16;
if(num%2==0)
{
    console.log("Event number");
}
else{
    console.log(num," is Odd number");
}

//else-if Statement----
let age=17;
if(age<18){
    console.log("Child");
}
else if(age>=60){
    console.log("sennior");
}
else{
    console.log("Adult");
}

// Ternary Opraters---
let age1=18;
let result=age1 >= 18? "Adult" : "Not Adult" 
console.log(result);

/*Ques1:- get user to input a number using prompt and check if number is a multipal of 5 or not.

let num1=prompt("Enter any number:");
if(num1%5==0)
{
    console.log(num1," is multipal of 5.")
} 
else
{
    console.log(num1," is not multipal of 5.")
}*/

//Ques 2:- write a code can give the grades to the students according to thair scores:-
let scores=83;
 if(scores>=90 && scores<=100){
    console.log("Grade A");
 }
 else if(scores>=70 && scores<=89){
     console.log("Grade B");
 }
 else if(scores>=60 && scores<=69){
    console.log("Grade C");
 }
 else if(scores>=50 && scores<=59){
    console.log("Grade D");
 }
 else if(scores>=0 && scores<=49){
    console.log("Fail");
 } 
 else
 {
    console.log("please enter vailed scores")
 }