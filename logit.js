/**
 * Created by cczhang on 12/9/2016.
 */
// This line is the magic trick for nodemon to display colors
process.stdout.isTTY = true;
//TODO: global debug flag; put it in a gloabl configure file later;
//TODO: publish as a npm module later;
const DEBUG = true;
const colors = require('colors/safe');
const paddingZero = require('./padding');

// A counter as tracking number
let trackingNumber = 0;

// Logit for per-module usage
// Colors include
// black, red, green, yellow, blue
// magenta, cyan, white, gray, grey
function LogIt(_debug_flag = true, _settings = {}) {
  // _debug_flag default true
  const debug_flag = _debug_flag && DEBUG;
  const color =  _settings.color || 'white';
  const body_color = _settings.body_color || 'white';
  const title = _settings.title || '';
  const mark  = _settings.mark || '';
  const len = _settings.len || 60;
  const rep = len - title.length;
  const padding = _settings.padding || 4;

  const premark = colors[color](title + Array(rep).join(mark));

  return function (...args) {
    if (!debug_flag) return;

    const track_number = colors['gray'](paddingZero(++trackingNumber, padding));
    //const premark = colors[color](track_number + ' ' + title + Array(rep).join(mark));

    Array.prototype.unshift.call(args, track_number + ' ' + premark + '\n');
    // REVIEW: colors cannot print object
    // temp solution: stringfy arg if it's an object
    args = args.map((arg) => {
      let _arg;
      if (typeof arg === 'object') {
        _arg = JSON.stringify(arg);
      } else {
        _arg = arg;
      }
      return colors[body_color](_arg);
    });
    console.log.apply(console, args);
  };
}

// ErrorIt for per-module usage
function ErrorIt(_debug_flag = true) {
  // _debug_flag default true
  //_debug_flag = _debug_flag === undefined ? true : _debug_flag;
  const debug_flag = _debug_flag && DEBUG;
  return function (error_msg, extra_info) {
    if (!debug_flag) return;
    error_msg = extra_info ? error_msg + ' ' + extra_info : error_msg;
    throw new Error(error_msg);
  };
}

module.exports = {
  LogIt,
  ErrorIt,
};
