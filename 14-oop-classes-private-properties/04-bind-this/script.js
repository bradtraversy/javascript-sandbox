class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App();
