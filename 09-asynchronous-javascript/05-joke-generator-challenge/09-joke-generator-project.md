# Joke Generator Project Challenge

In the last video, we saw how to make a request to an API using the `XMLHttpRequest` object. In this video, we'll use the same technique to make a request to the [https://api.chucknorris.io/](https://api.chucknorris.io/) to get a random Chuck Norris joke and put it into the page. We will also create a button that will allow us to get a new joke.

Before I move on, I would like to challenge you to create this yourself without having to follow along. We went over everything that you need to know already. In the resources for this video, you'll find the 'chuck-joke-generator`folder with the HTML and CSS along with an empty `script.js` file. You just need to do the following:

- Add an event listener for the button
- Create a function that will make a request to https://api.chucknorris.io/jokes/random using the `XMLHttpRequest` object
- Get the data that is sent back (this.responseText), parse the JSON and get the joke from it
- Display the joke in the page (you can use the `innerHTML` property)

<details>
  <summary>Click For Solution</summary>

First I will bring in the button and the id of where I want the joke to be displayed:

```js
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
```

Next, I will add an event listener for the button:

```js
jokeBtn.addEventListener('click', generateJoke);
```

Now, I will create the `generateJoke` function. This function will make the request to the API and get the joke:

```js
function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something went wrong (Not Funny)';
      }
    }
  };

  xhr.send();
}
```

I am going to first check for the `readystate` to be `4` and then check for the `status` to be `200`. If the status is anything but `200`, then I will put an error message into the joke element.

Remember, the server decides how to format the response. In this case, we get a JSON object with a `value` property. So, we need to parse the JSON and get the joke from it. Then we add it to the page.

We also want this to run right away, so let's use the `DOMContentLoaded` event:

```js
document.addEventListener('DOMContentLoaded', generateJoke);
```

</details>
