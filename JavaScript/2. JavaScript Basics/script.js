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

//var johnGame1 = 89;
//var johnGame2 = 120;
//var johnGame3 = 103;
//
//var mikeGame1 = 116;
//var mikeGame2 = 94;
//var mikeGame3 = 123;
//
//var johnAverageScore = (johnGame1+johnGame2+johnGame3)/3;
//var mikeAverageScore = (mikeGame1+mikeGame2+mikeGame3)/3;
//
//if(johnAverageScore > mikeAverageScore) {
//    console.log('John\'s team won with a total score average of ' + johnAverageScore + ' whereas Mike\'s team scored ' + mikeAverageScore);
//} else if(johnAverageScore < mikeAverageScore) {
//    console.log('Mike\'s team won with a total score average of ' + mikeAverageScore + ' whereas John\'s team scored ' + johnAverageScore);
//} else {
//    console.log('Both Mike\'s and John\'s score are equal. So, it\'s a draw! Final score: ' + johnAverageScore);
//}
//
////Mary score added
//var maryGame1 = 97;
//var maryGame2 = 134;
//var maryGame3 = 105;
//
//var maryAverageScore = (maryGame1+maryGame1+maryGame1)/3;
//
//if(johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
//    console.log('John\'s team won with a total score average of ' + johnAverageScore + ' whereas Mike\'s team scored ' + mikeAverageScore + ' and Mary\'s average score is ' + maryAverageScore);
//} else if(mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
//    console.log('Mike\'s team won with a total score average of ' + mikeAverageScore + ' whereas John\'s team scored ' + johnAverageScore + ' and Mary\'s average score is ' + maryAverageScore);
//} else if(maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore) {
//    console.log('Mary\'s team won with a total score average of ' + maryAverageScore + ' whereas John\'s team scored ' + johnAverageScore + ' and Mike\'s average score is ' + mikeAverageScore);
//} else {
//    console.log('It\'s a draw');
//}

//**** Functions ****

//function calculateAge(birthYear) {
//    return 2020 - birthYear;
//}
//
//var birthYearOfUser = 1991;

//console.log(calculateAge(birthYearOfUser));s
////OR
//console.log('This User is ' + calculateAge(birthYearOfUser) + ' years old');
////OR we can also do it like
//var ageOfUser = calculateAge(birthYearOfUser);
//console.log('User is ' + ageOfUser + ' years old');

//function yearsUntilRetirement(yearOfBirth, firstName) {
//    var age = calculateAge(yearOfBirth);
//    var retirement = 60 - age;
//    
//    if(retirement <= 0) {
//        console.log(firstName + ' has already retired');
//    } else if (retirement === 1) {
//        console.log(firstName + ' retires in ' + retirement + ' year.');
//    } else {
//        console.log(firstName + ' retires in ' + retirement + ' years.');
//    }
//}
//
//yearsUntilRetirement(1991, 'John'); //calling the function
//yearsUntilRetirement(1948, 'Mike');


//**** Function Statements & Expessions ****

//var whatDoYouDo = function(job, firstName) {
//    switch(job) {
//        case 'teacher':
//            return firstName + ' is a teacher';
//        case 'driver':
//            return firstName + ' is a driver';
//        case 'designer':
//            return firstName + ' is a designer';
//        default:
//            return firstName + ' does something else'
//    }
//}
//
//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('designer', 'Mike'));
//console.log(whatDoYouDo('retired', 'Mark'));


//**** Arrays ****

////Array with 3 elements
//var names = ['John', 'Mike', 'Mark'];
////Another way of declaring an array
//var years = new Array(1990, 1969, 1947);
//
////console.log(names[0]);
////console.log(names);
////console.log(names.length);
//
//names[1] = 'Jane';
//
//names[names.length] = 'Mary';
//names[names.length] = 'Ben';
//console.log(names);

//First Name, Last Name, Year of Birth, Job, Is marries
//var john = ['John', 'Smith', 1991, 'teacher', false];

//john.push('blue'); //Add element to the end of array i.e. index array.length
//console.log(john);
//john.unshift('Mr.'); //Add element to the begning of array i.e. index 0
//console.log(john);
//john.pop(); //Removes the last element from the array
//console.log(john);
//john.pop(); //Removes the last element from the array
//console.log(john);
//john.shift(); //Removes the first element from the array
//console.log(john);
//console.log(john.indexOf(1991)); //will return the index of the argunment that we pass inside ot this array

//console.log(john.indexOf(23));

//var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
//console.log(isDesigner);

//**** CODING CHALLENGE 3 SOLUTION ****
//var bills = [124, 48, 268];
//
//function calculateTip(bill) {
//    var tip = 0;
//    if(bill < 50) {
//        //20%
//        return bill*(20/100);
//    } else if(bill >= 50 && bill <= 200) {
//        //15%
//        return bill*(15/100);
//    } else {
//        //10%
//        return bill*(10/100);
//    }
//}
//
//var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
//var finalAmounts = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
//
//console.log("Bills are: " + bills);
//console.log("Tips are: " + tips);
//console.log("Final amount paid: " + finalAmounts);

//**** Objects and Properties ****

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1991,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: "teacher",
//    isMarried: false
//};

//console.log(john.lastName);
//console.log(john.job);
//console.log(john.family[0]);

//console.log(john['lastName']);
//var x = 'job';
//console.log(john[x]);
//console.log(john['family']);
//console.log(john['family'][0]);

//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);

//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1991;
//jane['lastName'] = 'Smith';
//
//console.log(jane);

//**** Objects and Methods ****

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1991,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: "teacher",
//    isMarried: false,
//    calcAge: function() {
//        this.age = 2020-this.birthYear;
//    }
//};
//
////console.log(john.calcAge());
//
////john.age = john.calcAge();
//
//john.calcAge();
//console.log(john);

//**** Coding challenge 4 solution ****

//var john = {
//    fullName: "John Smith",
//    mass: 72,
//    height: 1.8,
//    calcBMI: function() {
//        this.BMI = this.mass / (this.height * this.height);
//        return this.BMI;
//    }
//}
//
//var ben = {
//    fullName: "Ben Smith",
//    mass: 78,
//    height: 1.6,
//    calcBMI: function() {
//        this.BMI = this.mass / (this.height * this.height);
//        return this.BMI;
//    }
//}
//
//john.calcBMI();
//ben.calcBMI();
//
//if(john.BMI > ben.BMI) {
//   console.log('John\'s BMI ' + john.BMI + ' is higher than Ben\'s BMI ' + ben.BMI); 
//} else if(john.BMI < ben.BMI) {
//    console.log('Ben\'s BMI ' + ben.BMI + ' is higher than John\'s BMI ' + john.BMI); 
//} else {
//    console.log('John BMI ' + john.BMI + ' and Ben\'s BMI ' + ben.BMI + ' are equal'); 
//}

//**** Loops & Iterations ****
//for (var i = 0; i < 10; i++) {
//    console.log(i);
//}
//
////Print values from 1 to 20
//for (var i = 1; i <= 20; i++) {
//    console.log(i);
//}
//
////Print all odd numbers between 1 to 20
//for (var i = 1; i <= 20; i+=2) {
//    console.log(i);
//}

//var john = ['John', 'Smith', 1990, 'designer', false];
////for loop
//for(var i = 0; i < john.length; i++) {
//    console.log(john[i]);
//}

////While Loop

//var i = 0;
//while(i < john.length) {
//    console.log(john[i]);
//    i++;
//}

////contiue and break statements
//var john = ['John', 'Smith', 1990, 'designer', false];
//for(var i = 0; i < john.length; i++) {
//    if(typeof john[i] !== 'string') break; //continue
//    console.log(john[i]);
//}

//Loop backwards
//var john = ['John', 'Smith', 1990, 'designer', false];
//for(var i = john.length - 1; i >= 0; i--) {
//    console.log(john[i]);
//}

//**** Coding Challenge 5 ****

//Creatte john family object
var johnFamily = {
    firstName: 'John',
    lastName: 'Smith',
    bills: [124, 48, 268, 180, 42], //all the bills values in an array
    calcTip: function() {
        
        this.tips = []; //new propety tips will be created
        this.totalPaid = []; //new property totalPaid will be ceated
        
        for(var i = 0; i < this.bills.length; i++) {
            
            var bill = this.bills[i]; //pick up the current value at index i
            var tip = 0; //tip variable will be initialized with 0 in every iteration
            
            if(bill < 50) {
                //20%
                tip = bill*(20/100) //20% tip calculation
            } else if(bill >= 50 && bill <= 200) {
                //15%
                tip = bill*(15/100)
            } else {
                //10%
                tip = bill*(10/100)
            }
            
            this.tips[i] = tip; //adding tip value to the tip poperty just created
            this.totalPaid[i] = bill+tip; //adding total value to totalPaid pproperty
            
        } //End of for-loop
    } //End of CalcTip
};

//Creating mark's family object
var markFamily = {
    firstName: 'Mark',
    lastName: 'Smith',
    bills: [77, 375, 110, 45], //values updated with mark bills
    calcTip: function() {
        
        this.tips = [];
        this.totalPaid = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            
            var bill = this.bills[i];
            var tip = 0;
            
            if(bill < 100) {
                //20%
                tip = bill*(20/100)
            } else if(bill >= 100 && bill <= 300) {
                //10%
                tip = bill*(10/100)
            } else {
                //25%
                tip = bill*(25/100)
            }
            
            this.tips[i] = tip;
            this.totalPaid[i] = bill+tip;
            
        } //End of for-loop
    } //End of CalcTip
};

//Function to calculate average of tips
function calcAvg(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum/tips.length;
}

johnFamily.calcTip(); //calculating tips for john
markFamily.calcTip(); //calculating tips for mark
//console.log(johnFamily, markFamily);

johnFamily.avgTips = calcAvg(johnFamily.tips); //tips average for john getting stored in a new property avgTips
markFamily.avgTips = calcAvg(markFamily.tips); //tips averrage for mark getting stored in a new property avgTips

//Pringint the final result
if (johnFamily.avgTips > markFamily.avgTips) {
    console.log(johnFamily.firstName + '\'s family paid $' + johnFamily.avgTips + ' in tips which is more than what ' + markFamily.firstName + '\'s family pays i.e. $' + markFamily.avgTips);
} else if(johnFamily.avgTips < markFamily.avgTips) {
    console.log(markFamily.firstName + '\'s family paid $' + markFamily.avgTips + ' in tips which is more than what ' + johnFamily.firstName + '\'s family pays i.e. $' + johnFamily.avgTips);
} else {
    console.log(markFamily.firstName + '\'s family paid $' + markFamily.avgTips + ' in tips and ' + johnFamily.firstName + '\'s family pays i.e. $' + johnFamily.avgTips);
}