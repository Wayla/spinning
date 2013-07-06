
# spinning

Fullscreen spinner overlay.

![screenshot](http://i.cloudup.com/nvmiUQm74x.png)

## Usage

```js
var Spinning = require('spinning');

var spinner = Spinning().text('loading...').light().size(200);

setTimeout(function () {
  spinner.remove();
}, 2000);
```

## API

### Spinning()

Create a new fullscreen spinner overlay and attach it to the `<body>`.

### Spinning#remove()

Remove `Spinning` from the DOM.

### Spinning#in(ms)

Set fade-in duration to `ms`. Defaults to `1000`.

### Spinning#out(ms)

Set fade-out duration to `ms`. Defaults to `300`.

### Spinning#*

See [spinner-browserify](https://github.com/juliangruber/spinner-browserify)
for the rest of the api.

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
