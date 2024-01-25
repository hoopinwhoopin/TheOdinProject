
   function addBook(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    
    const title = titleInput.value;
    const author = authorInput.value;
    
    const book = { title, author };
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteBook);
    
    li.appendChild(deleteButton);
    bookList.appendChild(li);
    titleInput.value = '';
    authorInput.value = '';
}

function deleteBook(event) {
    const li = event.target.parentElement;
    const bookList = li.parentElement;
    bookList.removeChild(li);
}

const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', addBook);