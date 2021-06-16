import SideNav from "./modules/sideNav.js";
import StickyNav from "./modules/stickyNav.js";

class App {
  constructor() {
    this.init();
  }
  init() {
    new StickyNav();
    new SideNav();
  }
}

const app = new App();

window.Lauren = window.Lauren || {};
window.Lauren.app = app;
export default App;
