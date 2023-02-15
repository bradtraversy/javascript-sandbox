function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true

// Use with for... of
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Use with spread operator
console.log([...createTeamIterator(teams)]);

// Use with destructuring
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);
