let box = document.getElementById("box")
let btn = document.getElementById("btn")
let inputData = document.getElementById("inputData")

function addTask() {
    text = inputData.value

    let para = document.createTextNode(text)
    console.log(para);
    
    let li = document.createTextNode("li")
    console.log(li);
    node = li.appendChild(para);
    console.log(node);
    box.appendChild(li)
}