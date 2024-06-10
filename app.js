const grocery = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const userinput = document.getElementById('user_input'); // Corrected id
const allitems = document.getElementById('allitems');

pencil.addEventListener("click", () => {
  allitems.innerHTML = "";
});

userinput.addEventListener("keydown", (event) => {
  if (event.key == 'Enter') {
    additem();
  }
});

const additem = function() {
  var h2 = document.createElement("h2");
  h2.innerHTML = "-" + userinput.value;

  h2.addEventListener('click', () => {
    h2.style.textDecoration = "line-through";
  });

  allitems.appendChild(h2); // Using appendChild to add the element
  userinput.value = "";
};
