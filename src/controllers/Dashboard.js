import viewNav from '../views/nav';
import viewFooter from '../views/footer';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
      <div class="row">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="row">
                <div class="col-6">${viewFooter()}</div>
              </div>

    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
