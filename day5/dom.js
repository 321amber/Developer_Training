//DOM - document object model
let allNodes = document.documentElement;
console.log(allNodes);

console.log(document.body);


console.log(document.body.childNodes);

//siblings of nodes
console.log(document.body.previousSibling);
console.log(document.body.previousSibling)
console.log(document.head.nextSibling)

console.log(document.body.children[0]);
console.log(document.body.firstElementChild);

console.log(document.lastChild.nextSibling);
console.log(document.firstChild.previousSibling);

// coloring the diagonal elements of the given table
 let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }

//accessing the elements
document.getElementById("table");
document.getElementsByClassName("para").textContent = "hi";





