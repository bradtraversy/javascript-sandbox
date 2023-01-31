# Array Challenges

### Challenge 1:

**Instructions:**

Use some of the array methods that we looked at to mutate the following array to = the expected result below:

```js
const arr = [1, 2, 3, 4, 5];
```

**Expected Result:**

```js
console.log(arr);
// [6, 5, 4, 3, 2, 1, 0];
```

**Hint**: No hints. This one is pretty easy ;)

<details>
  <summary>Click For Solution</summary>
  
  ```js
  const arr = [1, 2, 3, 4, 5];

    arr.unshift(0);
    arr.push(6);
    arr.reverse();

    console.log(arr); // [6, 5, 4, 3, 2, 1, 0];

````

</details>


### Challenge 2:

**Instructions:**

Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
````

Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

**Expected Result:**

```js
console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
```

**Hint**: There are many ways to do this, but think of the concat() method or the spread operator as well as the slice() or splice() methods

<details>
  <summary>Click For Solution</summary>
  
```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3); // [1,2,3,4,5,6,7,8,9,10]

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4); // [1,2,3,4,5,6,7,8,9,10]

```

</details>

```
