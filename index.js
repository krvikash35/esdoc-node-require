'use strict';

exports.onHandleCode = function onHandleCode(ev) {
  ev.data.code = ev.data.code
    .replace(/(let|const|var)\s+([_\d\w]+)\s*=\s*require\('(.*)'\)/g,
             "import $2 from '$3' ");
};
