const myLibrary = [];


function Book(title, author, pages, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("Book 1", "Author 1", 200, "true");
const book2 = new Book("Book 2", "Author 2", 300, "true");
const book3 = new Book("Book 3", "Author 3", 250, "false");
  
myLibrary.push(book1, book2, book3);
  
// Refactored by doing away with addBookToLibrary function and calling it's implementation directly here.
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  // Prompt the user for book details
  const title = document.getElementById("b-title").value;
  const author = document.getElementById("author-name").value;
  const pages = document.getElementById("num-pages").value;
  const rid = document.getElementById("read").checked;
  
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
  displayBooks();
  closeModal();
})

function displayBooks(){
    const libraryContainer = document.getElementById("content-books");

    // Clear the existing content in the container
    libraryContainer.innerHTML = "";

    // Loop through the myLibrary array and create a card for each book
    myLibrary.forEach((book) => 
        {
            // Create a div element for the book card
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");

            // Create HTML content for the book title
            const bookTitle = document.createElement("p");
            bookTitle.textContent = `Title: ${book.title}`;

            // Append the book title to the book card
            bookCard.appendChild(bookTitle);


            // Create HTML content for the book author
            const bookAuthor = document.createElement("p");
            bookAuthor.textContent = `Author: ${book.author}`;

            // Append the book author to the book card
            bookCard.appendChild(bookAuthor);

            const bookPage = document.createElement("p");
            bookPage.textContent = `Page: ${book.pages}`;

            // Append the number of pages to the bookCard
            bookCard.appendChild(bookPage);

            const bookRead = document.createElement("p");
            bookRead.textContent = `Read: ${book.read}`;

            // Append Read status to the book card
            bookCard.appendChild(bookRead);

            // Add remove button to each card
            const removeBookBtn = document.createElement("button");
            removeBookBtn.textContent = `Remove`;
            removeBookBtn.classList.add("remove-btn");

            //append the remove button to each card
            bookCard.appendChild(removeBookBtn);

            // Append the book card to the library container
            libraryContainer.appendChild(bookCard);
        });
}

// Function to remove a book from the library
function removeBook(event) {
    let buts = document.querySelectorAll("remove-btn");
    for (let i=0; i<buts.length; i++) {
        if(JSON.stringify(buts[i].id) === JSON.stringify(event.id)) {
            /* You can do your stuff here using index */
            myLibrary.splice(event.id, 1);
            displayBooks();
        }
    }
    
    // Remove the book from the library array using splice
    // myLibrary.splice(index, 1);
    
    // // Refresh the book display
    // //displayBooks();
    // console.log(myLibrary);
  }
  //button click to remove book
//   document.getElementById(`${myLibrary.indexOf(book)}`).addEventListener("click", removeBook(`${myLibrary.indexOf(book)}`))
//   console.log(myLibrary);





const popUpForm = document.getElementById("popUpForm");
var button = document.getElementById("addBook");
//Form Pop-Up//

//button function//
button.addEventListener("click", function() {
  document.getElementById("popUpForm").style.display = "block";
//   document.getElementById("addBook").style.display = ""
});
let (x < myLibrary.length);
//get button ids
const rmBtn = docucment.getElementById("${i}");
rmBtn.addEventListener("click", function(){

})

function closeModal() {
    document.getElementById("popUpForm").style.display = "none";
}
// document.getElementById('form').addEventListener('submit', addBookToLibrary(e))

