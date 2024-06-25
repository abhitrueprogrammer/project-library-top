const myLibrary = [new Book("Harry Potter", "JK Rowling", 250, true), new Book("Animal Farm", "George Orwell", 50, true)];

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
function showBook(){
    for(bk of myLibrary){
        const tableRow = document.createElement("tr");
        for(attribute in bk){
            const tableData = document.createElement("td");
            tableData.textContent = bk[attribute];
            console.log(bk.attribute);
            tableRow.appendChild(tableData);
        }
        let tableData = createTDwithButton("Read");
        tableRow.appendChild(tableData);

        tableData = createTDwithButton("Delete");
        tableRow.appendChild(tableData);


        
        const table = document.querySelector('table');
        table.appendChild(tableRow);
    }

    function createTDwithButton(text) {
        const tableData = document.createElement("td");
        const button = document.createElement("button");
        button.classList.toggle("btn");
        button.textContent = text;
        tableData.appendChild(button);
        return tableData;
    }
}

showBook();
function addBookToLibrary() {
    // do stuff here
  }