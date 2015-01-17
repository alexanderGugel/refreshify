# refreshify

> watch mode on steroids for browserify builds

## Features

[![build status](https://secure.travis-ci.org/alexanderGugel/refreshify.png)](http://travis-ci.org/alexanderGugel/refreshify)

Update any source file and your browserify bundle will be recompiled on the
spot.

* recompiles your browserify bundle as soon as a source file changes
* notifies you via native desktop notification if your build fails

![notification](https://raw.github.com/alexanderGugel/refreshify/master/example/notification.gif)

* live-reload built in

![live-reload](https://raw.github.com/alexanderGugel/refreshify/master/example/live-reload.gif)

* server/protocol agnostic: No need to have a local dev server, even works when files are beign served from the local file system

![protocol](https://raw.github.com/alexanderGugel/refreshify/master/example/protocol.gif)

## Example

Use `refreshify` with all the same arguments as `browserify` except that
`-o` is mandatory:

```
$ refreshify main.js -o static/bundle.js
```

Now as you update files, `static/bundle.js` will be automatically incrementally rebuilt on
the fly.

You can use `-v` to get more verbose output to show when a file was written and how long the bundling took (in seconds):

```
$ refreshify browser.js -d -o static/bundle.js -v
610598 bytes written to static/bundle.js  0.23s
610606 bytes written to static/bundle.js  0.10s
610597 bytes written to static/bundle.js  0.14s
610606 bytes written to static/bundle.js  0.08s
610597 bytes written to static/bundle.js  0.08s
610597 bytes written to static/bundle.js  0.19s
```

To run the example included in this repo, run `npm run example`.

## Install

With [npm](https://npmjs.org) do:

```
$ npm install -g refreshify
```

to get the global `refreshify` command.


## License

MIT
