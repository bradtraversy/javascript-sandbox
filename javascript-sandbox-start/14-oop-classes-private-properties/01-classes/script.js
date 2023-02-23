function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
  return this.height === this.width;
};

Rectangle.prototype.logArea = function () {
  console.log('Rectangle Area: ' + this.area());
};
