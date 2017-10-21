'use strict';

exports.onHandleCode = function onHandleCode(ev) {
  console.log('ev.data.code', ev.data.code);
  ev.data.code = ev.data.code
    .replace(/.*require\('.*'\)/g,
             "import * as $1 from '$1' ");
  console.log('ev.data.code new', ev.data.code);
};
