export default class SideNav {
  constructor() {
    this.addListener();
  }
  addListener() {
    let elem = document.querySelector(".js-sticky-nav");

    elem.addEventListener("click", (ev) => {
      ev.preventDefault();
    });
  }
}
