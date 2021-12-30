let value;

//  value = document.querySelector("#addInput")
localStorage.clear()
let trial = ["serhat", "muhammed", "fırat"]
localStorage.setItem("tasks", JSON.stringify(trial))
if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", "[]")
}

let addArea = document.querySelector("#addInput");
let todoList = document.querySelector("#todoList");
let taskArray = [];
//localStorage.setItem("tasks", JSON.stringify(taskArray));
let storedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(storedTasks.length)
if (storedTasks.length != 0) {
    for (let i = 0; i < storedTasks.length; i++) {
        let deneme = document.createElement("li");
        let c1 = document.createElement("a");
        c1.href = "#";
        let c2 = document.createElement("i");
        c2.className = "fas fa-times-circle";
        c1.appendChild(c2);
        let ss = document.createElement("span");
        ss.appendChild(c1);
        deneme.textContent = addArea.value;
        deneme.className = "list-group-item d-flex justify-content-between align-items-start liste-eleman";
        deneme.appendChild(ss);
        todoList.appendChild(deneme);
    }
}








let addButton = document.querySelector("#addButton").addEventListener("click", function (e) {


    let deneme = document.createElement("li");
    let c1 = document.createElement("a");
    c1.href = "#";
    let c2 = document.createElement("i");
    c2.className = "fas fa-times-circle";
    c1.appendChild(c2);
    let ss = document.createElement("span");
    ss.appendChild(c1);
    deneme.textContent = addArea.value;
    deneme.className = "list-group-item d-flex justify-content-between align-items-start liste-eleman";
    deneme.appendChild(ss);
    todoList.appendChild(deneme);
});

let clrbutton = document.querySelector("#clrBtn");
clrbutton.addEventListener("click", function (e) {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
})

//localStorage.clear()

//taskArray = ["serhat", "ali", "kerim"]
//localStorage.setItem("names", JSON.stringify(taskArray));

    // < li class="list-group-item d-flex justify-content-between align-items-start" > Yemek yap
    //     < span class="badge " > <a href="#"><i class="fas fa-times-circle"></i></a></span >
    //                 </li >

    // let deneme = document.createElement("li")
    // let c1 = document.createElement("a")
    // c1.href = "#"
    // let c2 = document.createElement("i")
    // c2.className = "fas fa-times-circle"
    // c1.appendChild(c2)
    // let ss = document.createElement("span")
    // ss.appendChild(c1)
    // deneme.textContent = "Denemeeee"
    // deneme.className = "list-group-item d-flex justify-content-between align-items-start"
    // deneme.appendChild(ss)
    // todoList.appendChild(deneme)
    //btn.addEventListener("ondblclick", clicked())



    //console.log(deneme);