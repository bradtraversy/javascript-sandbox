class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
  }

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById('calories-consumed');

    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );

    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');

    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );

    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const progressEl = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._totalCalories;
    caloriesRemainingEl.innerHTML = remaining;
    if (remaining <= 0) {
      caloriesRemainingEl.parentElement.classList.remove('bg-light');
      caloriesRemainingEl.parentElement.classList.add('bg-danger');
      progressEl.classList.add('bg-danger');
      progressEl.classList.remove('bg-success');
    } else {
      caloriesRemainingEl.parentElement.classList.remove('bg-danger');
      caloriesRemainingEl.parentElement.classList.add('bg-light');
      progressEl.classList.remove('bg-danger');
      progressEl.classList.add('bg-success');
    }
  }

  _displayCaloriesProgress() {
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCalorieProgress();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class App {
  constructor() {
    this._tracker = new CalorieTracker();

    document
      .getElementById('meal-form')
      .addEventListener('submit', this._newMeal.bind(this, 'meal'));

    document
      .getElementById('workout-form')
      .addEventListener('submit', this._newWorkout.bind(this, 'workout'));
  }

  _newMeal(e) {
    e.preventDefault();
    console.log(1);
    const name = document.getElementById('meal-name');
    const calories = document.getElementById('meal-calories');

    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    // Create a new meal
    const meal = new Meal(name.value, +calories.value);

    // Add the meal to the tracker
    this._tracker.addMeal(meal);

    // Clear the form
    name.value = '';
    calories.value = '';

    // Collapse the form
    const collapseMeal = document.getElementById('collapse-meal');
    const bsCollapse = new bootstrap.Collapse(collapseMeal, {
      toggle: true,
    });
  }

  _newWorkout(e) {
    e.preventDefault();
    const name = document.getElementById('workout-name');
    const calories = document.getElementById('workout-calories');

    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    // Create a new workout
    const workout = new Workout(name.value, +calories.value);

    // Add the workout to the tracker
    this._tracker.addWorkout(workout);

    // Clear the form
    name.value = '';
    calories.value = '';

    // Collapse the form
    const collapseWorkout = document.getElementById('collapse-workout');
    const bsCollapse = new bootstrap.Collapse(collapseWorkout, {
      toggle: true,
    });
  }
}

const app = new App();
