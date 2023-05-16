//Create a variable to store the <ul> element of the HTML
const ulElement = document.querySelector('ul'); //querySelector() is a method that returns the first element that matches a specified CSS selector in the document.

//Create a for loop that will iterate from 0 to 100
for(let i = 1; i < 101; i++)
{
    //Create a variable to store the <li> element of the HTML, that I'm going to add to the document
    const liElement = document.createElement('li');

    //If the number is divisible by 3 and 5, print "FizzBuzz" to the console and change the color of the text to red
    if(i % 3 === 0 && i % 5 === 0)
    {
        liElement.innerHTML = 'FizzBuzz';
        liElement.style.color = 'red';
        console.log('FizzBuzz');
    }
    //If the number is divisible by 3, print "Fizz" to the console and change the color of the text to blue
    else if(i % 3 === 0)
    {
        liElement.innerHTML = 'Fizz';
        liElement.style.color = 'blue';
        console.log('Fizz');
    }
    //If the number is divisible by 5, print "Buzz" to the console and change the color of the text to green
    else if(i % 5 === 0) 
    {
        liElement.innerHTML = 'Buzz';
        liElement.style.color = 'green';
        console.log('Buzz');
    }
    //If the number is not divisible by 3 or 5, print the number itself to the console and change the color of the text to orange
    else
    {
        liElement.innerHTML = i;
        liElement.style.color = 'orange';
        console.log(i);
    }

    //Add the <li> element to the <ul> element
    ulElement.append(liElement);
    //append() method inserts a set of Node objects or DOMString objects after the last child of the ParentNode.

    //Remember, the difference between append() and appendChild() is that append() allows you to also append DOMString objects, while appendChild() only accepts Node objects and not DOMString objects.
}
