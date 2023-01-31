# Function Challenges

Now that you know the basics of how functions work, let's try a few challenges.

## Challenge 1

**Instructions:**

Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function

**Expected Result:**

```JavaScript
console.log(getCelsius(32)); // 0
```

You can make the output look prettier by putting it into a string. You can even add `\xB0` (degrees) and a `C` in front of the celsius temperature.

```JavaScript
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C
```

**Hints:**

The formula for Fahrenheit to Celsius is `(F - 32) * 5 / 9`. Read more about the formula [here](https://www.cuemath.com/fahrenheit-to-celsius-formula/) if needed.

<details>
  <summary>Click For Solution</summary>
  
```JavaScript
const getCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
};

console.log(`The temperature is ${getCelsius(32)} \xB0C`); // The temperature is 0 °C

````

</details>


## Challenge 2

**Instructions:**

Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

**Expected Result:**

```JavaScript
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }
````

**Hints:**

1.  You can use `Math.min()` and `Math.max()` to get the min and max of a list of numbers.
2.  You can use the Spread `...` operator to spread the values of an array into separate arguments.

<details>
  <summary>Click For Solution</summary>
  
```JavaScript
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

return {
min,
max,
};
}

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));
// { min: 32, max: 109 }

````

</details>


## Challenge 3

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

**Expected Result:**

```JavaScript
// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.
````

**Hints:**

1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
2.  You do not have to return anything from this function, just log to the console.

<details>
  <summary>Click For Solution</summary>
  
  ```JavaScript
((length, width) => {
const area = length * width;

const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

console.log(output);
})(10, 5);

```
</details>

```
