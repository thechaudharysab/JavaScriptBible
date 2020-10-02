//****Let's start coding****
//console.log('Hello World!!!');

//****Variables & Data Types****
//var firstName = 'Talha';
//var lastName = 'Chaudhry';
//var age = 28;
//var isOfValidAge = true;

//console.log(isOfValidAge);

//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);

//****Basic Operators****

//var yearUserWasBornIn = 2020 - 28; //Current year minus age of person
//console.log(yearUserWasBornIn);

//var currentYear = 2020;
//var user1Age = 29;
//var user2Age = 28;
//var yearUserWasBornIn = currentYear - user1Age;
//console.log(yearUserWasBornIn);
//
//console.log(currentYear + 2);
//console.log(currentYear * 2);
//console.log(currentYear / 2);

//logical operator
//var isUser1Older = user1Age > user2Age;
//console.log(isUser1Older);

//typeof operator
//console.log(typeof isUser1Older);

//****Operator Precedence****

//var currentYear = 2020;
//var yearUser1WasBorn = 1991;
//var validAge = 18;
//
//var isValidAge = currentYear - yearUser1WasBorn >= validAge;
//console.log(isValidAge);

//var user1Age = 29;
//var user2Age = 28;
//var averageAge = (user1Age + user2Age) / 2;
//console.log(averageAge);

//Multiple assignments
//var x, y;
//x = y = (3+5) * 4 - 6;
//console.log(x, y);


//**** CODING CHALLENGE 1 SOLUTION ****
////1
//var markHeight = 1.85928; //in meters
//var markMass = 70; //in KG
//
//var johnHeight = 1.8288;
//var johnMass = 72;
////2
//var markBMI = markMass / (markHeight * markHeight);
//var johnBMI = johnMass / (johnHeight * johnHeight);
////3
//var whohasHigherBMI = markBMI > johnBMI;
////4
//console.log("Is Mark's BMI higher than John's?", whohasHigherBMI);
//*****************************************


//****If-Else Statements****

//var firstName = 'John';
//var maritalStatus = 'Single';
//
//
//if(maritalStatus === 'Married') {
//    console.log(firstName + ' is married!');
//} else {
//    console.log(firstName + ' is not married!');
//}
//
//var isMarried = true;
//
//if(isMarried) {
//    console.log(firstName + ' is married!');
//} else {
//    console.log(firstName + ' is not married!');
//}
//
////1
//var markHeight = 1.85928; //in meters
//var markMass = 70; //in KG
//
//var johnHeight = 1.8288;
//var johnMass = 72;
////2
//var markBMI = markMass / (markHeight * markHeight);
//var johnBMI = johnMass / (johnHeight * johnHeight);
////3
//var whohasHigherBMI = markBMI > johnBMI;
////4
//if(markBMI > johnBMI) {
//    console.log('Mark\'s BMI is greater than John\'s BMI.')
//} else {
//    console.log('Mark\'s BMI is not greater than John\'s BMI.')
//}

//****Boolean Logic****
//var firstName = 'John';
//var age = 16;
//
//if(age < 13) {
//    console.log(firstName + ' is a boy.');
//} else if(age >= 13 && age < 20) {
//    console.log(firstName + ' is a teenager.');
//} else if (age >=20 && age < 30) {
//    console.log(firstName + ' is a young man.')       
//} else {
//    console.log(firstName + ' is a man.');
//}

//****The Ternary Operator and Switch Statements****

//ternary Operator
//var firstName = 'John';
//var age = 16;
//
//age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
           
//var age = 22;
//var drink = age >= 18 ? 'beer' : 'juice';
//console.log(drink);

//Switch statement
//var job = 'teacher';
//switch(job) {
//    case 'teacher':
//    case 'instructor':
//        console.log('John teach kids how to code');
//        break;
//    case 'driver':
//        console.log('John drives GrabCar in Kuala Lumpur');
//        break;
//    case 'designer':
//        console.log('John design awesome websites');
//        break;
//    default:
//        console.log('John does something else');
//}

//var age=16;
//switch(true) {
//    case age < 13:
//        console.log('John is a boy');
//        break;
//    case age >= 13 && age < 20:
//        console.log('John is a teenager');
//        break;
//    case age >= 20 && age < 30:
//        console.log('John is a young man');
//        break;
//    default:
//        console.log('John is a man');
//}

//****Truthy and Falsy Values & Equality Operators****

//var height;
//height = '';
//if(height || height === 0) {
//    console.log('Variable is defined');
//} else {
//    console.log('Variable has not been defined');
//}

//var height = 23;
//
//if(height == '23') {
//    console.log('The == operator does type coercion.');
//}

//**** Coding Challenge 2 Solution ****
























