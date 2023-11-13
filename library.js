const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function addBookToLibrary() {
  // Prompt the user for book details
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author name:");
  const pages = prompt("Enter the number of pages:");

  // Create a new Book object with the user-provided details
  const newBook = new Book(title, author, pages);

  // Add the new book to the library array
  myLibrary.push(newBook);

  console.log("Book added to library:", newBook);
}

function displayBooks(Arr){
    Arr.map(function(){
        return
    })
}



const popUpForm = document.getElementById("popUpForm");
var button = document.getElementById("addBook");
//Form Pop-Up//
//button.onclick = () => {window.open('hello!')};//

//button function//
button.addEventListener("click", function() {
  document.getElementById("popUpForm").style.display = "block";
 
});