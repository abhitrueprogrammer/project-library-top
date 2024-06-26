const myLibrary = [new Book("Harry Potter", "JK Rowling", 250, true), new Book("Animal Farm", "George Orwell", 50, true)];

let book_no_global = 0; //change to static class variable or closure]

function getBookNumber(){
    return book_no_global++
}

showAllBooks();

function Book(title, author, nPg, read){
    this.title = title;
    this.author = author;
    this.nPg = nPg;
    this.read = read  //expecting bool

    // this.info = ()=>{
    //     if(this.read==false){
    //         readStr = "not read yet"
    //     }
    //     else{
    //         readStr = "read"
    //     }
    //     console.log(`${this.title} by ${this.author}, ${this.nPg} pages, ${readStr}`)
    // }
}
function showAllBooks(){
    for(bk of myLibrary){
        showBook(bk);
    }
}


function showBook(bk) {
    const bk_no = getBookNumber();
    const tableRow = document.createElement("tr");
    for (attribute in bk) {
        const tableData = document.createElement("td");
        tableData.classList.toggle(attribute)
        tableData.textContent = bk[attribute];
        tableRow.appendChild(tableData);
    }
    const readButton = createTDwithButton("Read", bk_no);
    readButton.addEventListener("click", ()=>{
        const readInfo = document.querySelector(`tr[data-item-number="${bk_no}"] .read`);
        readInfo.textContent = readInfo.textContent === "true" ? false : true
        readInfo.textContent("changed");
    })
    tableRow.appendChild(readButton);
;

    const deleteButton = createTDwithButton("Delete", bk_no);
    
    deleteButton.addEventListener("click", ()=>{
        const rowToBeDeleted = document.querySelector(`tr[data-item-number="${bk_no}"]`);
        rowToBeDeleted.remove();
    });
    tableRow.appendChild(deleteButton);


    tableRow.setAttribute("data-item-number", bk_no)
    const table = document.querySelector('table');
    table.appendChild(tableRow);

    function createTDwithButton(text, bk_no) {
        const tableData = document.createElement("td");
        const button = document.createElement("button");
        button.classList.toggle("td-btn");
        button.setAttribute("data-item-number", bk_no)
        button.textContent = text;
        tableData.appendChild(button);
        return tableData;
    }
}

function addBookToLibrary(bookDetailArray) {
    [title, author, nPg, read] = bookDetailArray;
    let bk = new Book(title, author, nPg, read)
    myLibrary.push(bk)
  }


  let openModal = document.querySelector(".open-modal")
  let dialog = document.querySelector("dialog")
  const closeBtn = document.querySelector(".close-modal")
  openModal.addEventListener("click", ()=>{
      dialog.showModal()
  })
  let submitBtn = document.querySelector("button[type]")
  submitBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    const bookDetails = document.querySelectorAll(".book-form")
    const bookDetailArray = [];
    for(detail of bookDetails){
       bookDetailArray.push(detail.value);
    }
    bookDetailArray[3] = bookDetails[3].checked;
    addAndShowBook(bookDetailArray); /*Won't work probably*/
    dialog.close()
  });

  closeBtn.addEventListener("click", ()=>{
      dialog.close()
  });



function addAndShowBook(bookDetailArray) {
    addBookToLibrary(bookDetailArray);
    showBook(myLibrary.slice(-1)[0]);
}
// See learnlinuxTV and fireship js course and TLE latest vid