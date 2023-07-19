function deleteToDo() {
  let deletes = document.querySelectorAll(".delete");
  for (let i = 0; i < deletes.length; i++) {
    deletes[i].onclick = function () {
      this.parentElement.style.display = "none";
    };
  }
}
deleteToDo();

function completeToDo(){
    let complete=document.getElementsByClassName("todo");
    for (let i = 0; i < complete.length; i++) {
        complete[i].onclick = function () {
          this.classList.toggle("completed");//دا معناه لو لقى الكلاس ده هيشيله فساعتها مش هيبقى لونه ازرق ولو ضغط وملقهوش هيحطه
        };
      }
}
completeToDo();

document.getElementById("add_title").onclick = function () {
  let title = document.getElementById("title").value;
  if (title.trim() === "") {
    document.getElementById("warning").style.display = "block";
  } else {
    let toDo = document.createElement("div");
    toDo.classList.add("todo"); //عشان ياخد نفس الستايل الى مدياه لعناصر الجدول
    toDo.innerHTML = `
      <span class="listtodo">${title}</span>
      <span class="delete">Delete</span>
      <span class="complete">Complete</span>
  `;
    document.getElementById("title").value = "";
    document.getElementById("list").appendChild(toDo);
    deleteToDo();
    completeToDo();
  }
};
document.getElementById("ok").onclick = function () {
  document.getElementById("warning").style.display = "none";
};
