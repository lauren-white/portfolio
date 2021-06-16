export default class StickyNav {
  constructor() {
    this.scrolling = false;
    this.lastScrollPosition = window.scrollY;
    this.timerRunning = false;
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
      if (this.scrolling) {
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
    if (!this.timerRunning) {
      setTimeout(() => {
        let elem = document.querySelector(".header__nav");
        if (elem.classList.contains("header__sticky")) {
          elem.classList.remove("header__sticky");
        }
        this.timerRunning = true

      }, 5000);
    }
  }
}
