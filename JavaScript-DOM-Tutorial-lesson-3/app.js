document.addEventListener('DOMContentLoaded', function(){
 // Negates the fact that script source is in th beginning of 
 // head & not at end of code   




// This program shows multiple ways of querying the DOM

// Getting an elemnet through querySelector
// #book-list is parent node
// li is the child node of book-list with :nth-child(2) being the second on the list
// .name is the class name of the second node in the list

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

books = document.querySelectorAll('#book-list li .name');
 console.log(books);

// Array.from(books) changes the books span collection into an array

// the .forEach statement allows you to go through each element within the array

Array.from(books).forEach(function(book){
  console.log(book);
})










// How to edit HTMl & insert text into the DOM 5/30/2018

  var books = document.querySelectorAll('#book-list li .name');

    Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
 });

 const bookList = document.querySelector('#book-list');

   bookList.innerHTML = '<h2> this is how you would replace the html by setting it equal to something new </h2>';
    
   bookList.innerHTML += '<p> add this to it </p>';
  
  
  
  
  
  
  
    
    // Lesson 6
    
    const banner = document.querySelector('#page-banner');
    
    console.log('#page-banner node type is:', banner.nodeType);
    
     console.log('#page-banner node name is:', banner.nodeName);
     
      console.log('#page-banner node has child nodes is:', banner.hasChildNodes());
      
    const clonedBanner = banner.cloneNode(true);
    console.log(clonedBanner);
    
    
    
    
    
    
    //Lesson 7 and 8
    const bookList = document.querySelector('#book-list');
    console.log('the parent node is:', bookList.parentNode);    
    console.log('the parent node is:', bookList.parentElement.parentElement);   
    
    console.log(bookList.childNodes);
    console.log(bookList.children);
    
    console.log('the next sibling:', bookList.nextSibling);
    console.log('the next element sibling:', bookList.nextElementSibling);
    
    console.log('the previous sibling:', bookList.previousSibling);
    console.log('the previous element sibling:', bookList.previousElementSibling);
    
    bookList.previousElementSibling.querySelector('h1').innerHTML += '<br> that was cool </br>';
    
    
    
    
    
    
    // Lesson 9 addEventListener Very PowerFull!!!
    
    var bttn = document.querySelectorAll('#book-list .delete');
    
    console.log(bttn);
    
    Array.from(bttn).forEach(function(bttn){
        
        bttn.addEventListener('click', function(e){
            
           const li =  e.target.parentNode;
           li.parentNode.removeChild(li);
           
    });
    
    });
    
    const link = document.querySelector('#page-banner a');
    
    link.addEventListener('click', function(e){
        e.preventDefault();
        console.log('Navigate to NBA Finals Webpage', e.target.textContent, 'has been prevented');
    });
    
    
    
    
    
    
    
    
    
    
    
    //Lesson 10 Event Bubbling
    // Important to add eventListeners to the Bubbled parent node of the particular 
    // buttons you want to add an event to because if another button is added it will 
    // automatically take on the same parameters as the event listener of the parent node
    
    const list = document.querySelector('#book-list ul');
    
    console.log(list);
    
    list.addEventListener('click', function(e){
       if(e.target.className === 'delete'){
           const li = e.target.parentNode;
           li.parentNode.removeChild(li);
       } 
    });
    
    
    
    
    
    
    
    // Lesson 11
    // introduces a constant and sets it equal to the one form 
    //in the program with the ID 'add-book'
    const addForm = document.forms['add-book'];
    
    // Adds an event listener 'submit' to addForm , then a call back function 
    // with the argument add 
    addForm.addEventListener('submit', function(add){
        
    // this prevents the default action when you click on add button
        add.preventDefault();
    // the next constant selects the query 'input' within the form
        const value = addForm.querySelector('input[type="text"]').value;
        console.log(value);
        
    
    
    
    
    
    
    
    
    
    
    // Lesson 12 Create Elements
    // Create Elements
    // constant li creates an 'li' list element using the dom 
    const li = document.createElement('li');
    // Creates an element 'span' and sets equal to bookName
    const bookName = document.createElement('span');
    // Creates an element 'span' and sets equal to deleteBtn
    const deleteBtn = document.createElement('span');
    
    
    // Add whats is the text content within each element 
    deleteBtn.textContent= 'Delete';
    bookName.textContent = value;
    
    //Add classes to each element we've created
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    
    
    // Nest Elements together
    // this appends bookName & deleteBtn to li element we created
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    
    // This appends the li element to the list constant '<ul> element'
    list.appendChild(li);
   
   
    
    
    
    
    
    
    // Lesson 13
    // Add event listener to check boxes
    // constant hide books set equal to whatever has the id hide
    const hideBooks = document.querySelector('#hide');
    
    // adds an event listener to the const hideBook
    // event listener 'change' when the checkbox is changed
    // then a call back function with argument e 
    hideBooks.addEventListener('change', function(e){
        // if hideBooks checkbox is checked--
        if (hideBooks.checked){
            //<ul> style is set to display 'none' no books
            list.style.display = "none";
        }
        else{
            // Else <ul> style is set to display 'initial' which is the initial cook list
            list.style.display = "initial";
        }
        
    });
    
    
    
    
    
    
    
    
    // Lesson 14 
    // Filter through book list 
    // Add event listener to search box to filter through what your typing
    
    // searchBar set to ( got to straight to forms element with ID search-books---
    // then query to the element 'input' within the the form)
    const searchBar = document.forms['search-books'].querySelector('input');
    
    // add an event listener to the search bar called 'keyup' with a callback function(e)
    searchBar.addEventListener('keyup', function(e){
        // (e.target.value = what user types in).toLowerCase()
        const term = e.target.value.toLowerCase();
        // books = <ul> and you get the element by tagname, which gives the list of all li elements 
        const books = list.getElementsByTagName('li');
        console.log(books);
        // Changes books to an array then iterates through using For each loop
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            }
            else{
                book.style.display = 'none';
            }
        });
    });
    
    });
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    