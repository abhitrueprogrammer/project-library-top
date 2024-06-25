
const myLibrary = [new Book("Harry Potter", "JK Rowling", 250, true), new Book("Animal Farm", "George Orwell", 50, true)];
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
    const tableRow = document.createElement("tr");
    for (attribute in bk) {
        const tableData = document.createElement("td");
        tableData.textContent = bk[attribute];
        tableRow.appendChild(tableData);
    }
    let tableData = createTDwithButton("Read");
    tableRow.appendChild(tableData);

    tableData = createTDwithButton("Delete");
    tableRow.appendChild(tableData);



    const table = document.querySelector('table');
    table.appendChild(tableRow);

    function createTDwithButton(text) {
        const tableData = document.createElement("td");
        const button = document.createElement("button");
        button.classList.toggle("td-btn");
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
    bookDetailArray[3] = bookDetailArray[3] == 'on'? true:false;
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