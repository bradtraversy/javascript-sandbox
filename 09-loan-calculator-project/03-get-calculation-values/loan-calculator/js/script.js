const loanForm = document.getElementById('loan-form'),
  amountInput = document.getElementById('loan-amount'),
  interestInput = document.getElementById('loan-interest'),
  yearsInput = document.getElementById('loan-years'),
  loanResults = document.getElementById('loan-results'),
  monthlyResult = document.getElementById('monthly-result'),
  paymentResult = document.getElementById('payment-result'),
  interestResult = document.getElementById('interestResult'),
  errMsg = document.getElementById('error');

function onLoanFormSubmit(e) {
  e.preventDefault();

  // Validate input
  if (
    amountInput.value === '' ||
    interestInput.value === '' ||
    yearsInput.value === ''
  ) {
    alert('Please fill in all fields!');
    return;
  }

  const principal = parseFloat(amountInput.value);
  const monthlyInterest = parseFloat(interestInput.value) / 100 / 12;
  const numberOfPayments = parseFloat(yearsInput.value) * 12;

  console.log(principal, monthlyInterest, numberOfPayments);
}

loanForm.addEventListener('submit', onLoanFormSubmit);
