# akyuu-adapter-statsd

StatsD adapter for [Akyuujs](https://github.com/akyuujs/akyuu).

### Installation
```sh
$ npm install --save -d akyuu-adapter-statsd
```

### Configuration
Make sure you have a `connections` section in your configuration file(s).  
And its adapter should be `statsd`.

option | required | remark
---- | ---- | ----
adapter | ✓ | must be statsd
host | ✓ | default 127.0.0.1
port | ✓ | default 8125
... | | [docs](https://www.npmjs.com/package/hot-shots)

### Usage
#### Config File
```
// ${project}/config/default/connections.js

'use strict'

module.exports = {
    myStatsd: {
        adapter: 'statsd',
        host: '127.0.0.1',
        port: 8125
    }
}
```

#### Usage File
```
// ${project}/${some}.js

'use strict'

const akyuu = require('akyuu');
const myStatsd = akyuu.config.connection.get('myStatsd');

myStatsd.socket.on('error', function(error) {
    console.log(error);
});


statsd.increment('some_key');
statsd.timing('some_key', 100);
```
