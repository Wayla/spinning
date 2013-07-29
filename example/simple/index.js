var Spinning = require('../..');

var spinner = Spinning().text('loading...').light().size(150);
setTimeout(function () {
  spinner.remove();
}, 2000);
