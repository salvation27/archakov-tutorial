const input = document.querySelector(".input");
const btn_add_todoo = document.querySelector(".btn_add_todoo");
const result = document.querySelector("#result");
const cler = document.querySelector(".cler");

let count = 0;

function clerText() {
  if (count > 0) {
    cler.textContent = "";
  } else {
    cler.textContent = "список пуст";
  }
}
clerText();

// событие при нажатии на кнопку "Добавить"
btn_add_todoo.addEventListener("click", handleClickAdd);

function handleClickAdd() {
  // проверка если  ничего не введено то ничего не происходит
  if (input.value === "") {
    alert("Вы не ввели ничего");
    return;
  }
  render(input.value);
  input.value = "";
  clerText();
}

function render(value) {
  count++;
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.classList = "list_item";
  li.textContent = value;

  btn.textContent = "x";
  li.appendChild(btn);

  btn.addEventListener("click", () => {
    result.removeChild(li);
    count--;
    clerText();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("active");
  });

  result.appendChild(li);
}
