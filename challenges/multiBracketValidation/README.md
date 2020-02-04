# Challenge Summary
<!-- Short summary or background information -->
create a function take a string as input and return a boolean , i should check i the brackets are ordered right or not and depend on that return a boolean .

## Challenge Description
<!-- Description of the challenge -->
my function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
Round Brackets : ()
Square Brackets : []
Curly Brackets : {}


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
building a function with regular expression to check all brackets and creating three counters , each time found open bracket wee add one to the counter , if we found the close bracket we subtract one , after that if the counter equal zero it return true , else will be false ...

## Big O notation :
in the beginning i used 3 maps to loop over the array for each bracket type , then i remember the O(n) , so i used only one loop to go through the array once so O(1) ;

## Solution
<!-- Embedded whiteboard image -->

![](../../assets/brackets.JPG)

