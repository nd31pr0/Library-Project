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

   // Clear the form input fields
  document.getElementById("b-title").value = "";
  document.getElementById("author-name").value = "";
  document.getElementById("num-pages").value = "";
  document.getElementById("read").value = "false";

  console.log("Book added to library:", newBook);
}

function displayBooks(){
    const libraryContainer = document.getElementById("content-books");

    // Clear the existing content in the container
    libraryContainer.innerHTML = "";

    // Loop through the myLibrary array and create a card for each book
    myLibrary.forEach((book) => {
    // Create a div element for the book card
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Create HTML content for the book details
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;

    // Append the book details to the book card
    bookCard.appendChild(bookDetails);

    // Append the book card to the library container
    libraryContainer.appendChild(bookCard);
  });
}


const book1 = new Book("Book 1", "Author 1", 200);
const book2 = new Book("Book 2", "Author 2", 300);
const book3 = new Book("Book 3", "Author 3", 250);

myLibrary.push(book1, book2, book3);



const popUpForm = document.getElementById("popUpForm");
var button = document.getElementById("addBook");
//Form Pop-Up//

//button function//
button.addEventListener("click", function() {
  document.getElementById("popUpForm").style.display = "block";
  displayBooks();
});
