function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

// Add property
rect1.color = 'red';

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// Delete property
delete rect2.perimeter;

// Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect2));

// Get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}
