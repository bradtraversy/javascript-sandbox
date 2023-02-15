function toggle(e) {
  console.log('callback ran');
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);
