## logIt
A colorful logging utility to help you with Node.js application debugging

## To Install
#### Clone into a local folder:
```bash
$ git clone https://github.com/orange-beans/beans-reduxed-vicia
```
#### Then install dependent modules:
```bash
$ npm install
```

## To Use
#### 1.Import to your application:
```javascript
const { LogIt, ErrorIt } = require('logIt');
```
#### 2.Define the debug flag, title, mark and color:
```javascript
const logIt = LogIt(true, { title: 'Test', mark:'=', color:'green' });
```
#### 3.Then just call it like console.log:
```javascript
if (error) {
  logIt(error);
}
```
