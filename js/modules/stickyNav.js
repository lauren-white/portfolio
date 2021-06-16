export default class StickyNav {
  constructor() {
    this.scrolling = false;
    this.lastScrollPosition = window.scrollY;
    this.addListener();
    this.throttle();
  }

  addListener() {
    document.addEventListener("scroll", (ev) => {
      this.scrolling = true;
    });
  }
  throttle() {
    setInterval(() => {
      if (this.scrolling && window.scrollY > 30) {
        this.scolling = false;
        if (window.scrollY < this.lastScrollPosition) {
          this.addSticky();
        } else {
          this.removeSticky();
        }

        this.lastScrollPosition = window.scrollY;
      }
    }, 300);
  }
  addSticky() {
    let elem = document.querySelector(".header__nav");
    if (!elem.classList.contains("header__sticky")) {
      elem.classList.add("header__sticky");
    }
  }
  removeSticky() {
    let elem = document.querySelector(".header__nav");
    if (elem.classList.contains("header__sticky")) {
      elem.classList.remove("header__sticky");
    }
  }
}
