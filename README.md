# sad

A Hapi.js Plugin to add
**X-Clacks-Overhead**: **GNU Terry Pratchett** *header* to your projects.

[![Build Status](https://travis-ci.org/pandajs/sad.png?branch=master)](https://travis-ci.org/pandajs/sad) [![Code Climate](https://codeclimate.com/github/pandajs/sad.png)](https://codeclimate.com/github/pandajs/sad)
[![Test Coverage](https://codeclimate.com/github/pandajs/sad/badges/coverage.svg)](https://codeclimate.com/github/pandajs/sad) [![Dependencies](https://david-dm.org/pandajs/sad.png?theme=shields.io)](https://david-dm.org/pandajs/sad)
[![Node version](https://img.shields.io/node/v/atimer.svg?style=flat)](http://nodejs.org/download/)
[![HAPI 8.2](http://img.shields.io/badge/hapi-8.4-brightgreen.svg)](http://hapijs.com)
[![NPM Version][npm-image]][npm-url]


## Why?

On Thursday 12th March 2015 [***Terry Pratchett***](http://en.wikipedia.org/wiki/Terry_Pratchett)
passed away. This little Hapi.js Plugin keeps him ***alive*** "***in the code***".

> “We keep that name moving in the Overhead,” he said, and it seemed to  
> Princess that the wind in the shutter arrays above her blew more forlornly,  
> and the everlasting clicking of the shutters grew more urgent.  
> “He’d never have wanted to go home. He was a real linesman.  
> ***His name is in the code***, in the wind in the rigging and the shutters.  
> Haven’t you ever heard the saying:
> ‘*A man’s **not dead** while his **name is still spoken**’?*”

Even if you are not a Fan of Terry's work,
I *highly* recommend watching the [**Documentary**](https://www.google.co.uk/webhp?q=terry+pratchett+documentary&tbm=vid)


## What?

This node module (Hapi.js plugin) simply adds the
"[**GNU Terry Pratchett**](http://np.reddit.com/r/discworld/comments/2yt9j6/gnu_terry_pratchett/cpcvz46)" header
to all out-going http replies in you Hapi.js Web App/Site.

## Usage

### Install from NPM

```sh
npm install sad --save
```

### Register the Plugin in your Server

in your `server.js` (or what ever you prefer to name it)

```js
var Hapi   = require('hapi');
var server = new Hapi.Server();
var PORT   = process.env.PORT || 8000;

server.connection({ port: PORT });

server.register([ { register: require('sad') } ], function (err) {

  server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
          reply(“We will miss you Terry”);
      }
  });
});

server.start(function(){
  console.log('Now Visit: http://localhost:'+PORT);
});

module.exports = server;

```

### Confirm its Working

Run your server in your usual way *e.g*x:

```sh
node server.js
```

Then check that its working by issuing the following `curl` command:

```sh
curl -I http://127.0.0.1:8000/
```

You should expect to see something like this:

```sh
X-Clacks-Overhead: GNU Terry Pratchett
content-type: text/html; charset=utf-8
cache-control: no-cache
Date: Tue, 17 Mar 2015 10:04:32 GMT
Connection: keep-alive
```
The *first* line is the important one.

## Further Reading

http://www.reddit.com/r/bestof/comments/2yyop7/rdiscworld_redditors_with_web_servers_start/%22%3Ethis

[npm-image]: https://img.shields.io/npm/v/sad.svg?style=flat
[npm-url]: https://npmjs.org/package/sad
