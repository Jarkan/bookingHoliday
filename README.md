### Development
Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.

```shell
$ gulp
```

By default, it builds in debug mode.

* If you need to build in release mode, add `--type production` flag.
* You can define a port with `--port 3333` flag.


### Build
Builds a minified version of the application in the dist folder.

```shell
$ gulp build --type production
```
### How to Test

Run unit tests and integration tests are powered by [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/):

```shell
$ karma start
```
