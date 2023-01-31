# FizzBuzz Challenge

**Instructions:**

- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz".

**Hints:**

If you have taken the course up to this point, then you know how to write a loop and output/log something for each iteration. You also know how to check for a condition with "if/else/else if". You also know how to get a remainder of a number using the modulus operator (%). This is all you need to know to complete this challenge. Good luck!

<details>
  <summary>Click For Solution</summary>

### Solution 1: `For` Loop

```JavaScript
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
    	console.log("FizzBuzz");
    } else if (i % 3 == 0) {
    	console.log("Fizz");
    } else if (i % 5 == 0) {
    	console.log("Buzz");
    } else {
    	console.log(i);
    }
}
```

In the above code, we set out initialize expression to `1`. We set the condition to `i <= 100`. We set out increment expression to `i++`.

We first checked if `i` was divisible by **15**. Because this means `i` is divisible by both **3** and **5**. Since that is the case, we printed `"FizzBuzz"`. Then we checked to see if `i` was divisible by **3**. If so, we printed `"Fizz"`. Then we checked to see if `i` was divisible by **5**. If so, we printed `"Buzz"`. If `i` was not divisible by either **3** or **5**, we printed `i` (The current number).

### Solution 2: `While` Loop

```JavaScript
  let i = 1;

  while(i <= 100) {
    if (i % 15 == 0) {
    	console.log("FizzBuzz");
    } else if (i % 3 == 0) {
    	console.log("Fizz");
    } else if (i % 5 == 0) {
    	console.log("Buzz");
    } else {
    	console.log(i);
    }

    i++;
  }
```

We did the same thing here, just with a `while` loop

</details>
