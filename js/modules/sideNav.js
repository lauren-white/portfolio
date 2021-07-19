export default class SideNav {
  constructor() {
    this.addListener();
  }
  addListener() {
    let elem = document.querySelector(".js-side-nav");
    let body = document.querySelector("body");

    elem.addEventListener("click", (ev) => {
      if (elem.classList.contains("is-active")) {
        elem.classList.remove("is-active");
        body.classList.remove("blur");
      } else {
        elem.classList.add("is-active");
        body.classList.add("blur");
      }
    });
  }
}
