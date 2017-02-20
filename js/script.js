(function(d) {
  'use strict';

  function ToggleButton(wrapper) {
    this.wrapper = wrapper;
    this.bar = this.wrapper.querySelector('.bar__inner');
    this.checked = false;
    this.running = false;
  }

  ToggleButton.prototype.init = function() {
    ['click', 'keydown'].forEach(e => { this.wrapper.addEventListener(e, this.toggle.bind(this)); });
    this.bar.addEventListener('animationend', () => { this.running = false; });
  }

  ToggleButton.prototype.toggle = function(e) {
    if (e.type === 'keydown' && e.keyCode !== 32 || this.running) { return; }

    this.wrapper.classList.toggle('bar--on', !this.checked);
    this.wrapper.classList.toggle('bar--off', this.checked);

    this.running = true;
    this.checked = !this.checked;

    this.wrapper.setAttribute('aria-checked', this.checked);
  }

  d.querySelectorAll('.bar').forEach(button => {
    new ToggleButton(button).init();
  });

}(document));
