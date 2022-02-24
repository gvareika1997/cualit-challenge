// Plain JS for reactivity
let data = { price: 5, quantity: 2 };
let target = null;

class Dependancy {
  constructor() {
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}

Object.keys(data).forEach((key) => {
  let internalValue = data[key];

  const dep = new Dependancy();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },

    set(newValue) {
      internalValue = newValue;
      dep.notify();
    },
  });
});

function watcher(func) {
  target = func;
  target();
  target = null;
}

watcher(() => {
  data.total = data.price * data.quantity;
  document.getElementById("pricedisplay").innerHTML = data.price;
  document.getElementById("quantitydisplay").innerHTML = data.quantity;
  document.getElementById("totaldisplay").innerHTML = data.total;
});
