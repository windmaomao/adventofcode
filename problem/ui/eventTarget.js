// 5/15/24
class EventTarget {
  m = {};

  addEventListener(name, callback) {
    this.m[name] = this.m[name] || [];
    const events = this.m[name];
    if (!events.includes(callback)) {
      events.push(callback);
    }
    console.log(this.m);
  }

  removeEventListener(name, callback) {
    if (!(name in this.m)) return;
    this.m[name] = this.m[name].filter((e) => e !== callback);
    console.log(this.m);
  }

  dispatchEvent(name) {
    if (!(name in this.m)) return;
    this.m[name].forEach((e) => e());
  }
}
