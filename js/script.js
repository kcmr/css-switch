class ToggleButton {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.bar = this.wrapper.querySelector('.bar__inner');
    this.checked = false;
    this.running = false;
    this.init();
  }

  init() {
    ['click', 'keydown'].forEach(e => { this.wrapper.addEventListener(e, this.toggle.bind(this)); });
    this.bar.addEventListener('animationend', () => { this.running = false; });
  }

  toggle(e) {
    if (e.type === 'keydown' && e.keyCode !== 32 || this.running) { return; }

    this.wrapper.classList.toggle('bar--on', !this.checked);
    this.wrapper.classList.toggle('bar--off', this.checked);

    this.running = true;
    this.checked = !this.checked;

    this.wrapper.setAttribute('aria-checked', this.checked);
  }
};

(function(d) {
  'use strict';

  [...d.querySelectorAll('.bar')].forEach(button => new ToggleButton(button));
}(document))
