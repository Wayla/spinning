var Spinner = require('spinner-browserify');
var insertCss = require('insert-css');
var style = require('./style');
var fade = require('fade');
var ready = require('domready');

module.exports = Spin;

function Spin () {
  insertCss(style);

  // durations
  var fadeIn = 1000;
  var fadeOut = 300;
  var removed = false;
  var inserted = false;

  function insert (el) {
    ready(function () {
      if (removed) return;
      document.body.appendChild(el);
      inserted = true;
    })
  }

  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  insert(overlay);

  var spinner = new Spinner();
  spinner.el.className = 'spinner';
  insert(spinner.el);

  process.nextTick(function () {
    fade(overlay, 0.8, fadeIn);
    fade.in(spinner.el, fadeIn);
  });

  spinner.remove = function () {
    fade.out(overlay, fadeOut);
    fade.out(spinner.el, fadeOut);
    removed = true;

    setTimeout(function () {
      spinner.stop();
      if (inserted) {
        document.body.removeChild(overlay);
        document.body.removeChild(spinner.el);
      }
    }, fadeOut);
  };

  // reposition
  var size = spinner.size;
  spinner.size = function (n) {
    spinner.el.style.marginLeft =
    spinner.el.style.marginTop = '-' + (n/2) + 'px';
    return size.call(spinner, n);
  };

  var light = spinner.light;
  spinner.light = function () {
    overlay.style.backgroundColor = 'black';
    return light.call(spinner);
  };

  // set durations
  spinner['in'] = function (ms) { fadeIn = ms };
  spinner.out = function (ms) { fadeOut = ms };

  return spinner;
}
