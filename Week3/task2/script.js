const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

////////  input saved with enter keyword
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("addButton").click();
  }
});

//Data

const myTasks = [];

///////// lcl
if (myTasks.length == 0) {
  document.querySelector("#taskList").classList.add("d-none");
}

myTasks.forEach((e) => {
  const li = document.createElement("li");
  li.innerHTML = `${e.name} <button class="removeButton">
        Sil
            </button>`;
  li.classList.add("listItem");
  li.id = `${e.id}`;
  document.querySelector("#taskList").append(li);
});

//////////// listTasks variable printing
let listTasks = () => {
  if (myTasks.length > 0) {
    document.querySelector("#paragraph").classList.add("d-none");
    document.querySelector("#taskList").classList.remove("d-none");
  } else {
    document.querySelector("#paragraph").classList.remove("d-none");
    document.querySelector("#taskList").classList.add("d-none");
  }
  document.querySelector("#taskList").innerHTML = "";
  myTasks.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name} <button class="removeButton">
        Sil
            </button>`;
    li.id = `${element.id}`;
    li.classList.add("listItem");
    document.querySelector("#taskList").append(li);
  });
};

///////////////////////////////// taskList new task added
const addNewTask = () => {
  if (taskInput.value != 0) {
    let liDOM;
    liDOM = {
      id: `${Math.round(Math.random() * 100000)}`,
      name: `${taskInput.value}`,
    };
    myTasks.push(liDOM);
    document.querySelector("#snackbar").innerHTML = "Listeye görev ekledin.";
    snackbar();
  } else {
    alert("Bir şey yazmalısın.");
  }
  listTasks();
  taskInput.value = "";
  console.log(myTasks);
};

/////////////////////////////////////

///////////////////////// task deleted

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    //remove current task

    const selectedItemId = e.target.parentNode.id;
    myTasks.map((item) => {
      if (item.id === selectedItemId) {
        let findIndex = myTasks.indexOf(item);
        myTasks.splice(findIndex, 1);
      }
    });

    console.log(myTasks);

    listTasks();
    document.querySelector("#snackbar").innerHTML = "Listeden görev sildin";
    snackbar();
  }
});
/////////////////// li (task completed)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("listItem")) {
    //complete task
    e.target.classList.toggle("liFinished");
    document.querySelector("#snackbar").innerHTML = "Görevler bitti.";
    snackbar();

    if (e.target.classList.contains("liFinished")) {
      document.querySelector("#snackbar").innerHTML =
        "Tebrikler. Görevi tamamladın";
      snackbar();
    }
  }
});
////////// TOAST

function snackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}