// This program shows multiple ways of querying the DOM

// Getting an elemnet through querySelector
// #book-list is parent node
// li is the child node of book-list with :nth-child(2) being the second on the list
// .name is the class name of the second node in the list

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

//
var books = document.querySelector('#book-list li .name');
//console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

// Array.from(books) changes the books span collection into an array

// the .forEach statement allows you to go through each element within the array

Array.from(books).forEach(function(book){
    console.log(book);
})
