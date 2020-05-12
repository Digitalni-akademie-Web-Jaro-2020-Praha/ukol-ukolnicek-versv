'use strict';

console.log('funguju!');

/*---------
<div class="task">
          Vyprat ponožky
        </div>
        <div class="task">
          Naučit se funkce vyššího řádu
        </div>
        <div class="task">
          Nakoupit na víkend
        </div>*/




let tasks = [
  "nezvtekat se u javascriptu",
  "dodělat ještě další úkol k HTML/CSS",
  "uklidit celkově",
  "nakoupit jídlo"
];





const updateTasks = () => {
  const todo__tasksELm = document.querySelector(".todo__tasks");
  todo__tasksELm.innerHTML = " "; /*tohle je důležitý -> " ", protože jinak se později po každém kliknutí bude vypisovat celý seznam znovu a ne jen to, co zrovna připíšeme*/

  for (let i = 0; i < tasks.length; i += 1) {
    todo__tasksELm.innerHTML += `<div class= "task" <div> ${tasks[i]} </div></div>`
  }
};

updateTasks(); /*zavolám fci, aby se zobrazily již zapsané a přednastavené položky */

const addItem = () => {
  const newTaskElm = document.querySelector("#new-task");
  const text = newTaskElm.value;
  if (text !== " ") {
    tasks.push(text);
    newTaskElm.value = ""; /*po zapsání položky do pole, zmizí text z lišty*/
  } else {
    alert("Zapomněl(a) jsi zapsat úkol.");
  }

  updateTasks();/*nutné přidat!, jinak se po kliknutí na + nic nezobrazí*/
};

const btnElm = document.querySelector(".btn-add");
btnElm.addEventListener("click", addItem); /* po kliknutí na + se nový úkol přidá do pole - viz výše*/

