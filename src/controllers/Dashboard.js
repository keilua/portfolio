import viewNav from '../views/nav';
import viewFooter from '../views/footer';
import viewCard from '../views/card';
import viewSkills from '../views/skills';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    <div id="MainContent">
  <div>
      ${viewNav()}
      </div>
</div>

      
      <div>
      ${viewCard()}
      </div>
      <div>
      ${viewSkills()}
      </div>
      <div>
      ${viewFooter()}
      </div>

    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
