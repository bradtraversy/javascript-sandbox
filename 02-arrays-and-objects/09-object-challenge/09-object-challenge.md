# Object Challenge

### Step 1

Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

### Step 2

You finished reading all of the books. Set the `read` value for all of them to true. Do not edit the initial object. Set the values using dot notation.

### Step 3

Destructure the title from the first book and rename the variable to `firstBook`

### Step 4

Turn the library object into a JSON string

<details>
  <summary>Click For Solution</summary>

### Step 1 Solution

```js
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
];
```

### Step 2 Solution

```js
library[0].status.read = true;
library[1].status.read = true;
library[3].status.read = true;
```

### Step 4 Solution

```js
const { title: firstBook } = library[0];
console.log(firstBook);
```

### Step 4 Solution

```js
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
```

</details>
