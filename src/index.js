import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const addUnfinishedList = (text) => {
    const button_comp = document.createElement("button");
    const button_del = document.createElement("button");
    button_comp.innerText = "complete";
    button_del.innerText = "delete";

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = text;

    document.getElementById("ul-unfinished").appendChild(div);

    div.appendChild(li);
    div.appendChild(button_comp);
    div.appendChild(button_del);

    const deleteFromIncomplete = (target) => {
      const div_unfinished = target.parentNode;
      document.getElementById("ul-unfinished").removeChild(div_unfinished);
    };

    button_del.addEventListener("click", () => {
      deleteFromIncomplete(button_del);
    });

    button_comp.addEventListener("click", () => {
      button_comp.innerText = "";
      button_del.innerText = "";

      const div_unfinished = button_comp.parentNode;
      div_unfinished.appendChild(button_unfinished);

      deleteFromIncomplete(button_comp);
      document.getElementById("ul-finished").appendChild(div_unfinished);
    });
  };

  addUnfinishedList(inputText);

  const button_unfinished = document.createElement("button");
  button_unfinished.innerText = "make unfinished";

  button_unfinished.addEventListener("click", () => {
    const div_finished = button_unfinished.parentNode;
    document.getElementById("ul-finished").removeChild(div_finished);
    div_finished.removeChild(button_unfinished);

    const text = div_finished.firstElementChild.innerText;

    addUnfinishedList(text);
  });

  // console.log(button_unfinished);
  // console.log(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
