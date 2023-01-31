# Calculator Challenge

**Instructions:**

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

**Example:**

```
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message
```

**Hint:**

- You can use an if statement for the operator, but this is also a good example for using a switch statement.

<details>
  <summary>Click For Solution</summary>

```JavaScript
function calculator(num1, num2, operator) {
let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    result = 'Invalid operator';
}
console.log(result);
return result;
}

calculator(3, 4, '*'); // returns 12
```

</details>
