/* 

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

*/








/*
// How to edit HTMl & insert text into the DOM 5/30/2018

  var books = document.querySelectorAll('#book-list li .name');

    Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
 });

 const bookList = document.querySelector('#book-list');

   bookList.innerHTML = '<h2> this is how you would replace the html by setting it equal to something new </h2>';
    
   bookList.innerHTML += '<p> add this to it </p>';
  
  */
  
  
  
  
  
    
    // Lesson 6
    /*
    const banner = document.querySelector('#page-banner');
    
    console.log('#page-banner node type is:', banner.nodeType);
    
     console.log('#page-banner node name is:', banner.nodeName);
     
      console.log('#page-banner node has child nodes is:', banner.hasChildNodes());
      
    const clonedBanner = banner.cloneNode(true);
    console.log(clonedBanner);
    */
    
    
    
   /* 
    
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
    
    */
    
    
    
    /*
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
    
    */
    
    
    
    
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
    
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener('submit', function(add){
        add.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        console.log(value);
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    