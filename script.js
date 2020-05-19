//Hello world
console.log("Bonjour le monde"); //French
console.log("Ndewo Ụwa"); //Igbo
console.log("Kon'nichiwa sekai"); //Japanese
console.log("Halō prapan̄caṁ"); //Telugu
console.log("Sannu Duniya"); //Hausa
console.log("Geiá sou Kósme"); //Greek
console.log("Selam Dünya"); //Turkish
console.log("Mo ki O Ile Aiye"); //Yoruba
console.log("Sati srī akāla duni'ā"); //Punjabi
console.log("haye aduunka") //Somalis

//Exercise 2 Error debugging
console.log("I'm, awesome");

//Exercise3: Log the number
var numberX;
console.log("The value of x is equal to" + undefined);
console.log(numberX);
numberX = 8;
console.log("The value of numberX is equal to" + " " + 8);
console.log(numberX);


//Log the string
var myString ="Omisola Islamiyat"
console.log("The value of the string is Omisola, Islamiyat");
console.log(myString);
var myString = "Olayinka"
console.log("The value of the string is Olayinka");
console.log(myString);

//Round a number and log it
var z = 7.25;
console.log("The value of z is" +  7.25);
var a = Math.round(z);
console.log(a);
var result = Math.max(a,z)
console.log(result);


//log an array of animals
var myArray = ["items"]
console.log("The value of myArray is items")
console.log(myArray)
var myFavoriteAnimals = ["cat", "birds", "rabbit"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("piglet");
console.log(myFavoriteAnimals);


//log of the length of a string
var mySentence = "Programming is so interesting!"
console.log("The length of mySentence is" + " " + mySentence.length);


//Type checker
var x = 8;
var y = 99;

console.log(typeof x);
console.log(typeof y);

var userDetails = 
{
	userName: "Aishat",
	age: 15,
}


var zoo =
{
	bird: 3,
	horse: 76,
}
//1

if (typeof userDetails === 'number') {
	console.log('SAME TYPE')

}else
{
	console.log("Not the same...")
}

//2

if (typeof zoo === 'string') {
       console.log("SAME TYPE");
} else if (typeof zoo === 'number') {
      console.log("SAME TYPE");
} 
else { 
      console.log("Not the same...");
}

//3
if(typeof x === 'number'){
		console.log('SAME TYPE');
}

//4
if (typeof zoo === 'boolean') {
	console.log('SAME TYPE');
}

//5
if (typeof y === 'boolean') {
	console.log('SAME TYPE');

} else {
	console.log("Not the same...");
}

//6
if (typeof userDetails === 'object') {
	console.log('SAME TYPE')
}


//log the remainder
//log the remainder
//x is equal to 1 since x=7 and x=7%3 which is equals to 1
//y is equals to 1 since y =21 and y = 21%4 which is =1
//z is equal to 1 since z =13 and z =13%2 which is = 1




//Compare arrays
var myHobbies = ["sleeping", "chatting", "coding", "eating"];
var years = [1999, 1992, 2000, 2001, 2002, 1997,1998];

console.log('The length of myHobbies is'  + ' ' + myHobbies.length);
console.log('The length of years is'  + ' ' + years.length);

if (myHobbies.length === years.length) {
	console.log('They are the same!')
}else{
	console.log('Two different sizes')
}