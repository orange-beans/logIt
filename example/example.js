// Util
const { LogIt, ErrorIt } = require('../logit');
// Change the first parameter to false to disable logging
const logItServer = LogIt(true, { title: 'Server', mark:'=', color:'green' });
const logItDB = LogIt(true, { title: 'Database', mark:'=', color:'yellow' });
const logItRouter = LogIt(true, { title: 'Router', mark:'=', color:'cyan' });
const logItApp = LogIt(true, { title: 'App', mark:'=', color:'magenta' });

logItServer('Testing LogIt');
logItServer('Testing LogIt');
logItDB('Testing LogIt');
logItDB('Testing LogIt');
logItRouter('Testing LogIt');
logItRouter('Testing LogIt');
logItApp('Testing LogIt');
logItApp('Testing LogIt');
logItServer('Testing LogIt');
logItServer('Testing LogIt');
logItDB('Testing LogIt');
logItDB('Testing LogIt');
logItRouter('Testing LogIt');
logItRouter('Testing LogIt');
logItApp('Testing LogIt');
logItApp('Testing LogIt');
