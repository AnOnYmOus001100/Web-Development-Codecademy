/*
Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

Tasks:

1.
Create a variable named myAge, and set it equal to your age as a number.

Write a comment that explains this line of code.


2.
Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.

Write a comment that explains this line of code.


3.
Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.


4.
Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.

Set the result equal to a variable called laterYears. We’ll be changing this value later.

Write a comment that explains this line of code.


5.
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.

Write a comment that explains this line of code.


6.
If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?

Check off this task when you’re ready to move on.


7.
Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

Write a comment that explains this line of code.

8.
Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.

The toLowerCase method returns a string with all lowercase letters.

Write a comment that explains this line of code.


9.
Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.

Write a comment that explains this line of code.


10.
Great work! You can convert any human age to dog years. Try changing myAge and see what happens.

If you’d like extra practice, try writing this project without the *= operator.
*/

// setting constant myAge to 20
var myAge = 20;

// setting earlyYears to 2
var earlyYears = 2;

// mutiplying 10.5 to earlyYears and assinging
earlyYears *= 10.5;
// subtacting 2 from myAge and assigning to laterYears
var laterYears = myAge - 2;
// mutiplying 4 and assinging laterYears
laterYears *= 4;

console.log(earlyYears,laterYears);

// converting myAge to DogYears
myAgeInDogYears = earlyYears + laterYears;

//converting name to lowercase and storing in myName
var myName = 'AnOnYmOus001100'.toLowerCase();

// displaying output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
