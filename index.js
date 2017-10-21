'use strict';

exports.onHandleCode = function onHandleCode(ev) {
  ev.data.code = ev.data.code
    .replace(/.*require\('.*'\)/g,
             "import * as $1 from '$1' ");
};
