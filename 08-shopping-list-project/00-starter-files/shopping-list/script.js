// Git Version 1
const itemForm = document.querySelector('item-form');
const itemInput = document.querySelector('item-input');
const itemList = document.querySelector('item-list');

function addItem(e) {
  e.preventDefault();

  const val = itemInput.value;

  if (val === '') {
    alert('Add an item');
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(val));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.classList.add(...classes);
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.classList.add(...classes);
  return icon;
}

itemForm.addEventListener('submit', addItem);
