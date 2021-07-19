export default class SideNav {
  constructor() {
    this.addListener();
  }
  addListener() {
    let elem = document.querySelector(".js-side-nav");

    elem.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (elem.classList.contains("is-active")) {
        elem.classList.remove("is-active");
      } else {
        elem.classList.add("is-active");
      }
    });
  }
}
