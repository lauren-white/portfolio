export default class StickyNav {
  constructor() {
    this.didScroll = false;
    this.lastScrollPosition = window.scrollY;
    this.timerRunning = false;
    this.hamburgerNavShowing = false;
    this.screenSizeCheck();
    this.addResizeListener();
    this.addScrollListener();
    this.throttle();
  }
  screenSizeCheck() {
    //770px is when we switch to hamburger nav
    if (window.innerWidth <= 770) {
      this.hamburgerNavShowing = true;
    } else {
      this.hamburgerNavShowing = false;
    }
  }
  addResizeListener() {
    window.addEventListener("resize", (ev) => {
      this.screenSizeCheck();
    });
  }

  addScrollListener() {
    document.addEventListener("scroll", (ev) => {
      this.didScroll = true;
    });
  }
  throttle() {
    setInterval(() => {
      if (this.didScroll && !this.hamburgerNavShowing) {
        if (window.scrollY < this.lastScrollPosition) {
          this.addSticky();
        } else {
          this.removeSticky();
        }
        this.didScroll = false;
        this.lastScrollPosition = window.scrollY;
      }
    }, 250);
  }
  addSticky() {
    let elem = document.querySelector(".header__nav").parentElement;
    if (!elem.classList.contains("header__sticky")) {
      elem.classList.add("header__sticky");
    }
  }
  removeSticky() {
    let elem = document.querySelector(".header__nav").parentElement;
    if (elem.classList.contains("header__sticky")) {
      elem.classList.remove("header__sticky");
    }
  }
}
