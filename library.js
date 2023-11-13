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
  const title = document.getElementById("b-title").value;
  const author = document.getElementById("author-name").value;
  const pages = document.getElementById("num-pages").value;
  const rid = document.getElementById("read").value;
  
  // Create a new Book object with the user-provided details
  const newBook = new Book(title, author, pages, rid);

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

//button function//
button.addEventListener("click", function() {
  document.getElementById("popUpForm").style.display = "block";
});
addBookToLibrary()