function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();
