class TashQuene {
  constructor() {
    this.time = 0;
    this.tasks = [];
  }
  add(fn, delay) {
    this.time += delay;
    this.tasks.push({
      fn,
      delay: this.time,
    });
    return this;
  }
  start() {
    this.tasks.forEach(({fn, delay}, index) => {
      setTimeout(function () {
        fn();
      }, delay);
    })
  }
}

new TashQuene()
.add(() => console.log(1), 1000)
.add(() => console.log(2), 2000)
.add(() => console.log(3), 1000)
.start();
