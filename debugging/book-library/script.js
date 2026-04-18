const myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "500",
      true
    );
    myLibrary.push(book1, book2);

    render();
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function

function submit() {
  const titleInput = document.getElementById("title").value.trim();
  const authorInput = document.getElementById("author").value.trimStart();
  const pagesInput = Number(document.getElementById("pages").value);
  const checkInput = document.getElementById("check").checked;
  if (
    titleInput == "" ||
    pagesInput == "" ||
    authorInput == "" ||
    pagesInput == NaN ||
    pagesInput < 1 ||
    pagesInput > 16000
  ) {
    alert("Please fill all fields!");
  } else {
    let book = new Book(titleInput, authorInput, pagesInput, checkInput);
    myLibrary.push(book);
    render();
  }
}

function Book(titleInput, authorInput, pagesInput, checkInput) {
  this.title = titleInput;
  this.author = authorInput;
  this.pages = pagesInput;
  this.check = checkInput;
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;
  //delete old table
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  //insert updated row and cells
  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = table.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeButton = document.createElement("button");

    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";

    myLibrary[i].check ? (readStatus = "Yes") : (readStatus = "No");

    changeButton.innerText = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;

      render();
    });
    //add delete button to every row and render again
    const button = document.createElement("button");
    deleteCell.appendChild(button);
    button.className = "btn btn-warning";
    button.textContent = "Delete";
    button.addEventListener("click", function () {
      const deletedBook = myLibrary[i].title;
      myLibrary.splice(i, 1);

      render();
      alert(`You've deleted title: ${deletedBook}`);
    });
  }
}
