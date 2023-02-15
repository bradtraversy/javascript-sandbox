const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);

function submitForm(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  if (!selectedOption) {
    alert('Please select an option');
    return;
  }

  let voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);

  displayResults();

  // Disable form fields after submit
  document
    .getElementById('poll-form')
    .querySelectorAll('input, button')
    .forEach((el) => el.setAttribute('disabled', true));
}

function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';
  for (let [option, votes] of poll) {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );
    optionElement.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
    results.appendChild(optionElement);
  }
}

document.getElementById('poll-form').addEventListener('submit', submitForm);
